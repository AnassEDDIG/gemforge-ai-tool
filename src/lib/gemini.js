import { GoogleGenerativeAI } from "@google/generative-ai";

export function createGeminModel(apiKey) {
  // Google Generative AI instance initialized
  const genAI = new GoogleGenerativeAI(apiKey);

  // Gemini model instance configured to use the "gemini-2.0-flash" model
  const geminiModel = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  return geminiModel;
}
