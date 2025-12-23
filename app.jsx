import { Code, Play } from "lucide-react"

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Powered Code Playground</h1>
      <p>Experiment with code and build AI-powered tools.</p>

      <button style={{ marginRight: "10px" }}>
        <Play size={16} /> Run
      </button>

      <button>
        <Code size={16} /> View Code
      </button>
    </div>
  )
}

export default App
