import inquirer from "inquirer";
import chalk from "chalk";
import { cliServices } from "./choices.js";
import { commands } from "./commands/index.js";
import { formatChoices } from "./utils/formatChoices.js";

// Main function that starts the CLI
export async function runCLI() {
  // Formating the the display of the services that hasn't been implemented yet
  const formattedChoices = formatChoices(cliServices);

  // Programme keeps running till the user shooses to exit
  while (true) {
    // Diplaying the services that the CLI offers
    const answer = await inquirer.prompt([
      {
        type: "rawlist",
        name: "service",
        message: "Please choose a service:",
        choices: formattedChoices,
      },
    ]);

    // Finding the appropriate service metadata via the answer
    const serviceMetaData = cliServices.find(
      (srv) => srv.value === answer.service
    );
    if (!serviceMetaData) {
      //Handle the case where serviceMetaData is not found
      console.error(chalk.red(`Service metadata not found for: ${service}`));
      continue; // Go to the next iteration of the loop
    }

    const { value: serviceName } = serviceMetaData;

    if (serviceName === "Exit") return;
    // Executing the appropriate logic based on the service choosed
    switch (serviceName) {
      case "Document":
        await commands.documentCode(serviceMetaData);
        break;
      case "Optimize":
        await commands.optimizeCode(serviceMetaData);
        break;
      default:
        console.log(chalk.bgBlue("ℹ️ Service is coming soon !!"));
        break;
    }
  }
}
