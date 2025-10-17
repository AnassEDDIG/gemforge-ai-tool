import boxen from "boxen";
import chalk from "chalk";
import { createGeminModel } from "../lib/gemini.js";
import ora from "ora";

export async function VerifyApiKey(apiKey) {
  // Initialize spinner with a descriptive message
  const spinner = ora(
    chalk.cyan("Verifying API key and establishing connection...")
  ).start();

  try {
    // robust and less resource-intensive prompt
    const gemini = createGeminModel(apiKey); // create once, reuse
    const result = await gemini.generateContent("What is the current year?");
    const output = result.response?.text(); // Safe access using optional chaining

    if (output) {
      spinner.succeed(chalk.green("API key verified. GemForge is ready!"));
      return true;
    } else {
      // Handle cases where the API returns an empty response gracefully
      spinner.fail(chalk.red("Verification failed: Empty response from API."));
      displayHelpMessage(); // Call error message if failed
      return false;
    }
  } catch (error) {
    // More specific error handling and logging
    spinner.fail(chalk.red("API key verification failed."));
    if (
      error.message?.includes("400") ||
      error.message?.includes("permission")
    ) {
      console.log(chalk.yellow("Invalid API key or insufficient permissions."));
    } else {
      if (process.env.NODE_ENV === "development")
        // Log the full error for debugging
        console.error(chalk.red("An unexpected error occurred: "), error);
      else {
        console.error(
          chalk.red("An unexpected error occurred. Please try again later!")
        );
      }
    }
    displayHelpMessage(); // Call error message if failed
    return false;
  }
}

// the boxen message. steps to get an api key
function displayHelpMessage() {
  console.log(
    boxen(
      `${chalk.yellow(
        "➤ GemForge requires a Gemini AI API key."
      )}\n${chalk.cyan(
        "👉 Solution:"
      )}\n1. Get a key from: https://aistudio.google.com/app/apikey.\n2. Run GemForge with: npx gemforge-cli --api-key YOUR_API_KEY.\n3. Happy coding! •ᴗ•`,
      {
        padding: 1,
        borderColor: "red",
        borderStyle: "round",
      }
    )
  );
}
