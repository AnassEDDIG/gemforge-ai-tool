import boxen from "boxen";
import chalk from "chalk";
import { createGeminModel } from "../lib/gemini.js";
import ora from "ora";

export async function VerifyApiKey(apiKey) {
  // Start spinner
  const spinner = ora(
    chalk.cyan("Verifying your API key...")
  ).start();

  try {
    // using the the apiKey in test call to gemini
    const result = await createGeminModel(apiKey).generateContent(
      `what's today's date`
    );
    const output = result.response.text();
    // if we got an output means the api key is working and all set
    if (output) {
      spinner.succeed(
        chalk.green(`Welcome to GemForge your assistant is ready •ᴗ•`)
      );
      return true;
    }
  } catch (err) {
    spinner.fail(
      chalk.red("Verification failed. Please provide a valid API key.")
    );
    if (err.message?.includes("403") || err.message?.includes("permission")) {
      console.log(
        chalk.yellow("Your API key seems invalid or lacks access rights.")
      );
    }

    console.log(
      boxen(`${chalk.yellow("➤ This app uses Gemini AI internally, so you need an API key.")}
${chalk.cyan("👉 Solution:")}
1. You can get one from: https://aistudio.google.com/app/apikey.
2. Run the GemForge tool with » npm run gemforge --api-key YOUR_API_KEY.
3. And you are all set happy coding •ᴗ•.`,
        {
          padding: 1,
          borderColor: "red",
          borderStyle: "round",
        }
      )
    );
  }
}
