import inquirer from "inquirer";
import chalk from "chalk";
import { cliServices } from "./choices.js";
import { commands } from "./commands/index.js";
import { formatChoices } from "./utils/formatChoices.js";
import { retro } from "gradient-string";
import { introUI } from "./utils/introUI.js";

/**
 * Runs the main command-line interface for GemForge.
 *
 * This function initializes the CLI, handles user interactions, and executes
 * corresponding commands based on user input. It continues to run until the
 * user chooses to exit.
 *
 * @async
 * @function runCLI
 * @throws {Error} If an unexpected error occurs during service execution.
 */
export async function runCLI() {
  // Graceful global SIGINT handling
  process.on("SIGINT", () => {
    console.log("\n👋 GemForge exited gracefully.");
    process.exit(0);
  });

  const formattedChoices = formatChoices(cliServices);

  while (true) {
    // Clear previous menu/output for a clean UI and display the intro
    console.clear();
    introUI();

    try {
      // Prompt the user to select a service
      const answer = await inquirer.prompt([
        {
          type: "rawlist",
          name: "service",
          message: "Please choose a service:",
          choices: formattedChoices,
        },
      ]);

      // Retrieve metadata for the selected service
      const serviceMetaData = cliServices.find(
        (srv) => srv.value === answer.service
      );
      if (!serviceMetaData) {
        console.error(
          chalk.red(`Service metadata not found for: ${answer.service}`)
        );
        continue;
      }

      const { value: serviceName } = serviceMetaData;

      // Exit option
      if (serviceName === "Exit") {
        console.log(retro("\n👋 Goodbye from GemForge!"));
        process.exit(0);
      }

      // Execute corresponding command based on serviceName
      switch (serviceName) {
        case "Document":
          await commands.documentCode(serviceMetaData);
          break;
        case "Optimize":
          await commands.optimizeCode(serviceMetaData);
          break;
        case "Debug":
          await commands.debugCode(serviceMetaData);
          break;
        default:
          console.log(chalk.bgBlue("ℹ️ Service is coming soon !!"));
          break;
      }
    } catch (error) {
      // Handle user force exit from prompt
      if (error.name === "ExitPromptError") {
        console.log("\n👋 Exiting GemForge... Goodbye!");
        process.exit(0);
      }

      // Log error differently depending on environment
      if (process.env.NODE_ENV === "development") {
        console.log(
          chalk.red("⚠️ Error while handling service choice:"),
          error
        );
      } else {
        console.log(chalk.red("⚠️ Unexpected error. Please try again later!"));
      }
    }
  }
}
