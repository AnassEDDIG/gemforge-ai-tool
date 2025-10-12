import inquirer from "inquirer";
import fuzzyPath from "inquirer-fuzzy-path";
// Register the fuzzy path to add file picking to teh inquirer
inquirer.registerPrompt("fuzzypath", fuzzyPath);

// Function that opens the file navigation and search logic (currently made to support JS files only)
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
