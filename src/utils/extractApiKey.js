import { program } from "commander";

export function extractApiKey() {
  program
    .option("--api-key, GEMINI_API_KEY")
    .argument("--api-key GEMINI_API_KEY");
  program.parse();
  const apikey = program.args[0].trim();
  process.env.GEMINI_API_KEY = apikey;
  return apikey;
}
