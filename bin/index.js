#!/usr/bin/env node
import { runCLI } from "../src/cli.js";
import { extractApiKey } from "../src/utils/extractApiKey.js";
import { introUI } from "../src/utils/introUI.js";
import { VerifyApiKey } from "../src/utils/verifyApiKey.js";

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

// Display the initial UI
await introUI();

const apikey = extractApiKey();
if (await VerifyApiKey(apikey)) {
  // Run the application
  await runCLI();
}
