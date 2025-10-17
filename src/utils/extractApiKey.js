import { program } from "commander";

export function extractApiKey() {
  program.option("--api-key, GEMINI_API_KEY").argument("<string>");
  program.parse();

  const apiKey = program.args[0].trim();

  //Validate if apiKey exists
  if (!apiKey) {
    console.error(
      "API key is required. Provide it via --api-key or GEMINI_API_KEY environment variable."
    );
    process.exit(1); // Exit if API key is missing
  }

  // Set the environment variable
  process.env.GEMINI_API_KEY = apiKey;

  return apiKey;
}
