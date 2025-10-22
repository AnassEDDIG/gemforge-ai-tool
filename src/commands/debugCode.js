import { ExecuteCommand } from "../core/ExecuteCommand.js";
import { getUserCodeInput } from "../utils/getUserCodeInput.js";

/**
 * @async
 * @function debugCode
 * @description Handles the code debugging process. Retrieves user-provided code, and if provided, executes a command for debugging.
 * @param {object} serviceMetaData - Metadata related to the debugging service, passed to the ExecuteCommand function.
 * @returns {Promise<void>} - A promise that resolves after the debugging process is complete. Returns early if no file is provided.
 */
export async function debugCode(serviceMetaData) {
  const file = await getUserCodeInput();
  if (!file) return;

  await ExecuteCommand(serviceMetaData, file);
}
