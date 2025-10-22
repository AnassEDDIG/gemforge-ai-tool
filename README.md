# GemForge CLI

![GemForge CLI](https://ik.imagekit.io/dk03vfb2z/anass/Portfolio/gemforge/gemforge-cli.png?updatedAt=1760283335288)

**GemForge** is a JavaScript-focused CLI assistant powered by Google Gemini AI.  
It helps developers **document, analyze, and assist with JS code**, as well as general programming topics.

> ⚠️ Currently, only **JavaScript files** are supported.

---

## 🚀 Features

- Document code using JsDoc ✅
- Optimize code ✅
- Find bugs or logic errors ✅
- Generate test cases (Coming soon…)
- Rename variables professionally (Coming soon…)
- Explain code in English (Coming soon…)
- Translate code to another programming language (Coming soon…)
- Add a feature (Coming soon…)
- Detect security flaws (Coming soon…)
- Explain a programming topic (Coming soon…)
- Generate README (Coming soon…)

**Code input options**:

- Use existing file ✅
- Paste code to terminal (Coming soon…)
- Open your editor (Coming soon…)

---

## 💻 Installation

Install GemForge locally **inside your project folder**:

```bash
npm install gemforge-cli
```

# GemForge CLI - Usage Guide

> ⚠️ **Do not install globally**; GemForge needs to access your project files.

---

## 🔑 API Key Setup

GemForge requires a **Google Gemini API key**:

1. Get your key at: [AI Studio API Keys](https://aistudio.google.com/app/apikey)
2. Run GemForge with your API key:

```bash
npx gemforge-cli --api-key YOUR_API_KEY
```

The CLI will verify your API key before running any service.

## 📂 How to Use

1. Navigate to your project folder (where your JS files are):

```bash
cd /path/to/your/project
```

2. npx gemforge-cli --api-key YOUR_API_KEY

```bash
npx gemforge-cli --api-key YOUR_API_KEY
```

3. Follow the interactive prompts:

- Select a service
- Select how to provide the code (currently only file input supported)
- Output is generated in:
  - `./GemForge/<service>/<original_filename>.js`

## ⚠️ Notes

- CLI must be run from the folder containing your JS files.
- Only JavaScript is supported for now. Other languages will trigger a message.

## 🛠 Future Plans

- More code input options (paste, editor)
- Enable optimization, testing, and translation services
- Support additional programming languages

## 👤 Author

Anass Eddig – [GitHub](https://github.com/AnassEDDIG)

## 🔗 Repository

[https://github.com/AnassEDDIG/gemforge-ai-tool](https://github.com/AnassEDDIG/gemforge-ai-tool)
