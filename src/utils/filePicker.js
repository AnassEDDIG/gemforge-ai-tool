import inquirer from "inquirer";
import fuzzyPath from "inquirer-fuzzy-path";
// Register the fuzzy path to add file picking to teh inquirer
inquirer.registerPrompt("fuzzypath", fuzzyPath);

/**
 * @async
 * @function filePicker
 * @description Opens an interactive file picker in the console, allowing the user to select a JavaScript file.
 * @returns {Promise<string>} A promise that resolves with the path to the selected file.
 * @throws {Error} If there's an issue with the inquirer prompt.
 */
export async function filePicker() {
  const { file } = await inquirer.prompt([
    {
      type: "fuzzypath",
      name: "file",
      message: "Pick a file:",
      excludePath: (p) => p.startsWith("node_modules"),
      excludeFilter: (p) => !p.endsWith(".js"),
      itemType: "file",
      rootPath: "./",
      default: "./",
      suggestOnly: false,
      depthLimit: 5,
    },
  ]);
  return file;
}
