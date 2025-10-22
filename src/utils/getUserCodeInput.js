import chalk from "chalk";
import inquirer from "inquirer";
import { codeInputChoices } from "../choices.js";
import { filePicker } from "./filePicker.js";
import { formatChoices } from "./formatChoices.js";

/**
 * Prompts the user to choose how they want to provide code input (e.g., file path, direct input).
 * Handles the user's choice and returns the code based on their selection.
 *
 * @async
 * @function getUserCodeInput
 * @returns {Promise<string | null>} A promise that resolves to the code provided by the user, or null if an error occurred or the option is not yet implemented.
 * @throws {Error} If there is an error during the prompting or file processing.
 */
export async function getUserCodeInput() {
  try {
    /**
     * Formats the code input choices for display in the prompt highlights only the implemented services.
     * @type {string[]}
     */
    const formattedInuputChoices = formatChoices(codeInputChoices);

    /**
     * Prompts the user to select a code input method.
     * @type {object}
     * @property {string} codeInputChoice - The user's selected code input method.
     */
    const { codeInputChoice } = await inquirer.prompt([
      {
        type: "rawlist",
        name: "codeInputChoice",
        message: "Please choose how do you want to provide the code:",
        choices: formattedInuputChoices,
      },
    ]);

    switch (codeInputChoice) {
      case "filePath":
        return await filePicker();
      case "back":
        return null;
      default:
        console.log(chalk.bgYellowBright("ℹ️ Option is coming soon !!"));
        return null;
    }
  } catch (error) {
    if (error.name === "ExitPromptError") {
      console.log("\n👋 Exiting GemForge... Goodbye!");
      process.exit(0);
    }
    if (process.env.NODE_ENV === "development") {
      console.log(
        chalk.red("⚠️ Error while handling input choice:"),
        error.message
      );
    } else {
      console.log(
        chalk.red(
          "⚠️ Error while handling input choice. Please try again later!"
        )
      );
    }
    return null;
  }
}
