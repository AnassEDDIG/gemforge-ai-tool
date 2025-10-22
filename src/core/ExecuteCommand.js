import fs from "node:fs/promises";
import ora from "ora";
import path from "node:path";
import chalk from "chalk";
import inquirer from "inquirer";
import { createGeminModel } from "../lib/gemini.js";

/**
 * Executes a command to generate code based on a service's metadata and a given file.
 * It reads the file content, sends it to a Gemini model with a prompt, and saves the generated code to a file.
 *
 * @async
 * @function ExecuteCommand
 * @param {Object} serviceMetaData - Metadata about the service, including its name and prompt.
 * @param {string} serviceMetaData.value - The name of the service.
 * @param {string} serviceMetaData.prompt - The prompt to be used when generating code.
 * @param {string} file - The path to the file containing the code to be processed.
 * @returns {Promise<string|undefined>} - A promise that resolves with the generated code, or undefined if an error occurred.
 *
 * @throws {Error} - Throws an error if file reading or writing fails, or if the Gemini model encounters an issue.
 */

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
        4. Always provide full complete response and code if requested. 
        5. If the input is not valid JavaScript, respond with:
          "❌ This tool only supports JavaScript files for now."

        Be concise and strictly follow the task description.
        `);

    const output = result.response?.text();

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
      chalk.bgMagentaBright(`Code generated and saved to ${outputFolderPath}`)
    );
    // Wait for user to acknowledge
    await inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "Press Enter to return to menu:",
      },
    ]);
    return extractedCode;
  } catch (error) {
    // Fail spinner
    spinner.fail("An error occurred while generating code");
    if (error.status === 503) {
      console.log(
        chalk.yellow("The model is overloaded. Please try again later.")
      );
    }
    if ((process.env.NODE_ENV = "development")) {
      console.error("An unexpected error occurred: ", error.message);
    }
  }
}
