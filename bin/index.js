#!/usr/bin/env node
import { runCLI } from "../src/cli.js";
import { extractApiKey } from "../src/utils/extractApiKey.js";
import { introUI } from "../src/utils/introUI.js";
import { VerifyApiKey } from "../src/utils/verifyApiKey.js";

// Display the initial UI
introUI();
const apikey = extractApiKey();
if (await VerifyApiKey(apikey)) {
  // Run the application
  await runCLI();
}
