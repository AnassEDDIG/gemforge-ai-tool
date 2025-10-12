import figlet from "figlet";
import chalk from "chalk";
import { retro } from "gradient-string";

export function introUI() {
  // Create ASCII art title
  const title = figlet.textSync("GemForge", {
    font: "Standard",
    horizontalLayout: "full",
  });

  console.log(retro(title));

  // Info block
  console.log(chalk.cyan.bold("Author:       ") + chalk.white("Anass Eddig"));
  console.log(chalk.cyan.bold("Version:      ") + chalk.white("1.0.0"));
  console.log(
    chalk.cyan.bold("Purpose:      ") +
      chalk.white(
        "AI-powered code assistant for documentation, optimization, testing, and more"
      )
  );
  console.log(chalk.cyan.bold("Powered by:   ") + chalk.yellow("Node.js"));
  console.log(
    chalk.cyan.bold("GitHub:       ") +
      chalk.yellow("https://github.com/AnassEDDIG/gemforge-ai-tool")
  );
  console.log(
    chalk.cyan.bold("Note:         ") +
      chalk.white(
        "The current CLI tool primarily supports JavaScript. Additional programming languages will be supported in future updates."
      )
  );

  // Separator
  console.log(
    chalk.greenBright("──────────────────────────────────────────────")
  );

  // Motivational / engagement line
  console.log(chalk.yellow("🚀 Ready to boost your code productivity!"));
  console.log(
    chalk.greenBright("──────────────────────────────────────────────\n")
  );
}
