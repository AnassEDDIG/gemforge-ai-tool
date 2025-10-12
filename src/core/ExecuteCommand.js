import fs from "node:fs/promises";
import ora from "ora";
import path from "node:path";
import chalk from "chalk";
import { createGeminModel } from "../lib/gemini.js";

export async function ExecuteCommand(serviceMetaData, file) {
  const { value: serviceName, prompt } = serviceMetaData;
  // Start spinner
  const spinner = ora("Generating code...").start();

  try {
    const code = await fs.readFile(file, "utf-8");
    const result = await createGeminModel(process.env.GEMINI_API_KEY)
      .generateContent(`
        You are a professional JavaScript assistant.

        Task:
        - ${prompt}

        Context:
        \`\`\`javascript
        ${code}
        \`\`\`

        Instructions:
        1. Only modify or respond to the code above.
        2. Output must always be enclosed in a markdown code block (e.g. \`\`\`js ... \`\`\`).
        3. Do not include explanations or text unless explicitly requested.
        4. If the input is not valid JavaScript, respond with:
          "❌ This tool only supports JavaScript files for now."

        Be concise and strictly follow the task description.
        `);

    const output = result.response.text();

    // Extracting code block(s) from markdown
    const codeBlockRegex = /```(?:\w+)?\n([\s\S]*?)```/g;
    const matches = [...output.matchAll(codeBlockRegex)];
    const extractedCode =
      matches.length > 0 ? matches.map((m) => m[1]).join("\n") : output;
    // Making an output folder for easy access named after the service choosed
    const outputFolderPath = `./GemForge/${serviceName}`;
    await fs.mkdir(outputFolderPath, { recursive: true });
    await fs.writeFile(
      outputFolderPath + `/${path.basename(file)}`,
      extractedCode.trim(),
      "utf-8"
    );

    // Success spinner
    spinner.succeed(
      chalk.green(`Code generated and saved to ${outputFolderPath}`)
    );

    return extractedCode;
  } catch (err) {
    // Fail spinner
    spinner.fail("An error occurred while generating code");
    console.error(err.message);
  }
}
