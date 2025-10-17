import chalk from "chalk";

export function formatChoices(choices) {
  return choices.map((choice) => ({
    name: choice.available
      ? choice.name
      : chalk.hex("#757575ff")(`${choice.name} (Coming soon...)`),
    value: choice.value,
  }));
}
