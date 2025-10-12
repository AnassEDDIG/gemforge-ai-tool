import inquirer from "inquirer";
import chalk from "chalk";
import { cliServices } from "./choices.js";
import { documentCode } from "./commands/documentCode.js";

// Main function that starts the CLI
export async function runCLI() {
  // Formating the the display of the services that hasn't been implemented yet
  const formattedChoices = cliServices.map((service) => ({
    name: service.available
      ? service.name
      : chalk.hex("#757575ff")(`${service.name} (Coming soon...)`),
    value: service.value,
  }));

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
      (srv) => srv.value == answer.service
    );
    const { value: serviceName } = serviceMetaData;

    if (serviceName === "Exit") return;
    // Executing the appropriate logic based on the service choosed
    switch (serviceName) {
      case "Document":
        await documentCode(serviceMetaData);
        break;
      default:
        console.log(chalk.bgBlue("ℹ️ Service is coming soon !!"));
        break;
    }
  }
}
