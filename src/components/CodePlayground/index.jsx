import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CodePlayground.module.css";

export default function CodePlayground() {
  const navigate = useNavigate();
  const [code, setCode] = useState(
    '// Write your JavaScript code here\nconsole.log("Hello, World!");',
  );
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const runCode = () => {
    setOutput("");
    setError("");

    // Capture console.log output
    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      logs.push(
        args
          .map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg, null, 2)
              : String(arg),
          )
          .join(" "),
      );
      originalLog(...args);
    };

    console.error = (...args) => {
      logs.push("ERROR: " + args.map((arg) => String(arg)).join(" "));
      originalError(...args);
    };

    console.warn = (...args) => {
      logs.push("WARNING: " + args.map((arg) => String(arg)).join(" "));
      originalWarn(...args);
    };

    try {
      // Use Function constructor instead of eval for better error handling
      const result = new Function(code)();

      // If the code returns a value, show it
      if (result !== undefined) {
        logs.push(
          "→ " +
            (typeof result === "object"
              ? JSON.stringify(result, null, 2)
              : String(result)),
        );
      }

      setOutput(logs.join("\n"));
    } catch (err) {
      setError(err.toString());
    } finally {
      // Restore original console methods
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    }
  };

  const clearOutput = () => {
    setOutput("");
    setError("");
  };

  const clearCode = () => {
    setCode("");
    setOutput("");
    setError("");
  };

  return (
    <div className={styles.playground}>
      <div className={styles.header}>
        <button className={styles.btnBack} onClick={() => navigate("/")}>
          ← Back
        </button>
        <h1 className={styles.title}>JavaScript Playground</h1>
        <div className={styles.actions}>
          <button className={styles.btnClear} onClick={clearCode}>
            Clear Code
          </button>
          <button className={styles.btnRun} onClick={runCode}>
            ▶ Run
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.editorSection}>
          <div className={styles.sectionHeader}>
            <span>Code Editor</span>
          </div>
          <textarea
            className={styles.editor}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your JavaScript code here..."
            spellCheck="false"
          />
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <span>Console Output</span>
            {(output || error) && (
              <button className={styles.btnClearOutput} onClick={clearOutput}>
                Clear
              </button>
            )}
          </div>
          <div className={styles.output}>
            {error && <div className={styles.error}>{error}</div>}
            {output && <pre className={styles.consoleOutput}>{output}</pre>}
            {!output && !error && (
              <div className={styles.placeholder}>
                Click "Run" to execute your code...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
