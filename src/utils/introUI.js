import figlet from "figlet";
import chalk from "chalk";
import { retro } from "gradient-string";

export async function introUI() {
  console.clear();

  // ASCII art title with gradient
  const title = figlet.textSync("GemForge", {
    font: "Standard",
    horizontalLayout: "default",
  });

  console.log(retro.multiline(title));

  // A soft divider
  console.log(chalk.greenBright("═".repeat(50)));

  // Info block (aligned)
  const info = [
    { label: "Author", value: "Anass Eddig" },
    { label: "Version", value: "1.1.1" },
    {
      label: "Purpose",
      value:
        "AI-powered code assistant for documentation, optimization, and testing",
    },
    { label: "Powered by", value: "Node.js ⚙️" },
    {
      label: "GitHub",
      value: "https://github.com/AnassEDDIG/gemforge-ai-tool",
    },
  ];

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  for (const line of info) {
    console.log(
      chalk.cyan.bold(line.label.padEnd(13)) + chalk.white(line.value)
    );
    // This helps run the fadeIn animation only once
    if (!process.env.GEMINI_API_KEY) await sleep(200); // 200ms delay between lines
  }

  // Extra spacing and note
  console.log(
    chalk.cyan.bold("\nNote:".padEnd(13)) +
      chalk.white("Currently supports JavaScript. More languages coming soon!")
  );

  console.log(chalk.greenBright("═".repeat(50)));
  // Motivational / engagement line
  console.log(chalk.yellow("🚀 Ready to boost your code productivity!\n"));
}
