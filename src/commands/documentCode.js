import { ExecuteCommand } from "../core/ExecuteCommand.js";
import { getUserCodeInput } from "../utils/getUserCodeInput.js";

/**
 * @async
 * @function documentCode
 * @description Handles the code documentation process.  It retrieves user-provided code input and then executes a command to process and document the code.
 * @param {object} serviceMetaData - Metadata related to the documentation service, passed to the ExecuteCommand function.
 * @returns {Promise<void>} - A promise that resolves after the documentation process is complete.  Returns early if no file is provided.
 */
export async function documentCode(serviceMetaData) {
  const file = await getUserCodeInput();
  if (!file) return;

  await ExecuteCommand(serviceMetaData, file);
}
