import { ExecuteCommand } from "../core/ExecuteCommand.js";
import { getUserCodeInput } from "../utils/getUserCodeInput.js";

/**
 * @async
 * @function optimizeCode
 * @description Handles the code optimization service. It retrieves user code input and then passes it to a function that handles execution.
 * @param {object} serviceMetaData - Metadata about the service to be executed.
 * @returns {Promise<void>} - A Promise that resolves when the code optimization process is complete.
 */
export async function optimizeCode(serviceMetaData) {
  const file = await getUserCodeInput();
  if (!file) return;

  await ExecuteCommand(serviceMetaData, file);
}
