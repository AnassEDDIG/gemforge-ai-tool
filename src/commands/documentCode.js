import chalk from "chalk";
import inquirer from "inquirer";
import { ExecuteCommand } from "../core/ExecuteCommand.js";
import { codeInputChoices } from "../choices.js";
import { filePicker } from "../utils/filePicker.js";

/*
 * Function that handles the documentation service propmts for the file path
 * Then forwards the service metadata and the file to the ExecuteService function that handles the final execution
 */

export async function documentCode(serviceMetaData) {
  // Formating the the display of the code input ways that hasn't been implemented yet
  const formattedInuputChoices = codeInputChoices.map((choice) => ({
    name: choice.available
      ? choice.name
      : chalk.hex("#757575ff")(`${choice.name} (Coming soon...)`),
    value: choice.value,
  }));

  const { codeInputChoice } = await inquirer.prompt([
    {
      type: "rawlist",
      name: "codeInputChoice",
      message: "Please choose how do you want to provide the code:",
      choices: formattedInuputChoices,
    },
  ]);

  let file;
  switch (codeInputChoice) {
    case "filePath":
      // Calling the filePicker function that handles files tree and search for the files
      file = await filePicker();
      break;
    default:
      console.log(chalk.bgBlue("ℹ️ option is coming soon !!"));
      break;
  }
  // Tracking the file variable if it's seeded means we can continue if not we return
  if (file) {
    await ExecuteCommand(serviceMetaData, file);
  } else return;
}
