# AI-Powered Code Playground

An interactive JavaScript code playground enhanced with AI capabilities, allowing developers to write, execute, and get AI assistance with their code in real-time.

## Features

- **Live Code Editor** - Write and edit JavaScript code with syntax highlighting
- **Instant Execution** - Run your code directly in the browser with real-time output
- **AI Code Assistant** - Get help with code explanations, debugging, and suggestions
- **Code Generation** - Generate code snippets using natural language prompts
- **Error Detection** - Smart error handling with AI-powered debugging hints
- **Code Optimization** - Receive suggestions to improve code performance and readability
- **Multi-file Support** - Work with multiple JavaScript files simultaneously
- **Share & Export** - Save and share your code snippets with others

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-code-playground.git
cd ai-code-playground
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your API keys to the `.env` file:
```
ANTHROPIC_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`

```

### AI Settings

Configure AI behavior in `.env`:

```
AI_MODEL=claude-sonnet-4-5-20250929
AI_MAX_TOKENS=1000
AI_TEMPERATURE=0.7
```

## API Reference

### Code Execution API

```javascript
// Execute code
const result = await executeCode(codeString);
console.log(result.output);
```

### AI Service API

```javascript
// Get AI assistance
const response = await aiService.ask(prompt, context);

// Generate code
const code = await aiService.generateCode(description);

// Debug code
const suggestions = await aiService.debug(errorMessage, code);
```

## Keyboard Shortcuts

- `Ctrl+Enter` / `Cmd+Enter` - Run code
- `Ctrl+/` / `Cmd+/` - Toggle comment
- `Ctrl+S` / `Cmd+S` - Save code
- `Ctrl+Shift+F` / `Cmd+Shift+F` - Format code
- `Ctrl+K` / `Cmd+K` - Open AI assistant

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Code Editor**: Monaco Editor (VS Code editor)
- **AI Integration**: Anthropic Claude API
- **Code Execution**: Safe sandboxed JavaScript execution
- **Build Tool**: Webpack/Vite
- **Styling**: CSS Modules

## Security Considerations

- Code execution runs in a sandboxed iframe with restricted permissions
- No access to local file system or sensitive browser APIs
- API keys are stored securely and never exposed to the client
- Input sanitization to prevent XSS attacks
- Rate limiting on AI requests

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## Roadmap

- [ ] Support for multiple programming languages (Python, TypeScript, etc.)
- [ ] Collaborative editing with real-time sync
- [ ] Code versioning and history
- [ ] Custom AI model training on user's coding style
- [ ] Mobile app version
- [ ] Browser extension
- [ ] Integration with GitHub Gists


Made with ❤️ by developers, for developers