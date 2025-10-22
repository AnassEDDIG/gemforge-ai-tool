import { program } from "commander";

export function extractApiKey() {
  program
    .option("--api-key <key>", "Gemini API key")

  program.parse(process.argv);
  const options = program.opts();

  // Try to get API key from flag
  const apiKey = options.apiKey;

  // Validate
  if (!apiKey) {
    console.log("❌ API key is required. Provide it via --api-key <key>.");
    process.exit(1);
  }

  // Set env variable for later use
  process.env.GEMINI_API_KEY = apiKey.trim();

  return apiKey.trim();
}
