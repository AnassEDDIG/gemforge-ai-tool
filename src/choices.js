// All the CLI services with the metadata
export const cliServices = [
  {
    name: "Document code using JsDoc",
    value: "Document",
    prompt: "Document this code using JsDoc like a senior developer: ",
    available: true,
  },
  {
    name: "Optimize code",
    value: "Optimize",
    prompt:
      "Optimize this code like a senior developer. Focus on readability, performance, and modern JavaScript patterns. Add explanations as comments: ",
    available: true,
  },
  {
    name: "Find bugs or logic errors",
    value: "Debug",
    prompt: `Review this code carefully and return the entire code with the following rule: 
If no logic errors or bugs are found, add a comment at the top: '// ✅ No bugs or errors found.' 
If errors are found, comment them clearly inline in the code. Do not return plain text, always return the code.`,

    available: true,
  },
  {
    name: "Generate test cases",
    value: "TestCases",
    prompt: "Generate comprehensive test cases for this code: ",
    available: false,
  },
  {
    name: "Rename variables professionally",
    value: "Rename",
    prompt:
      "Rename the variables in this code professionally for better readability: ",
    available: false,
  },
  {
    name: "Explain code in English",
    value: "Explain",
    prompt: "Explain this code clearly in English: ",
    available: false,
  },
  {
    name: "Translate code to another programming language",
    value: "Translate",
    prompt: "Translate this code to another programming language: ",
    available: false,
  },
  {
    name: "Add a feature",
    value: "AddFeature",
    prompt: "Add this feature to the code: ",
    available: false,
  },
  {
    name: "Detect security flaws",
    value: "SecurityAudit",
    prompt:
      "Analyze this code and detect potential security flaws or vulnerabilities: ",
    available: false,
  },
  {
    name: "Explain a programming topic",
    value: "ExplainTopic",
    prompt: "Explain this general programming topic clearly and shortly: ",
    available: false,
  },
  {
    name: "Generate README",
    value: "GenerateReadme",
    prompt:
      "Generate a professional README.md for this project based on its code and purpose: ",
    available: false,
  },
  {
    name: "➜] Exit ",
    value: "Exit",
    available: true,
  },
];

// All the possibe ways for the user to provide the code
export const codeInputChoices = [
  { name: "Use existing file", value: "filePath", available: true },
  { name: "Paste Code to terminal", value: "terminal", available: false },
  { name: "Open your editor", value: "editor", available: false },
  { name: "Fetch code from URL or repo", value: "url", available: false },
  { name: "Use clipboard content", value: "clipboard", available: false },
  { name: "⬅ Back", value: "back", available: true },
];
