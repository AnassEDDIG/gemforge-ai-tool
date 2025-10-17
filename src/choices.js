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
      "Optimize this code to the maximum like a senior developer, add changes as comments: ",
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
    name: "Exit",
    value: "Exit",
    available: true,
  },
];

// All the possibe ways for the user to provide the code
export const codeInputChoices = [
  { name: "Use existing file", value: "filePath", available: true },
  { name: "Paste Code to terminal", value: "terminal", available: false },
  { name: "Open your editor", value: "editor", available: false },
];
