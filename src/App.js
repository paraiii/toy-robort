import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { DIRECTIONS, executeCommand } from "./components/commands";

const App = () => {
  const [state, setState] = useState({ x: 0, y: 0, f: "NORTH", placed: false });
  const [command, setCommand] = useState("");

  const handleCommand = () => {
    const parts = command.trim().split("");
    const action = parts[0];

    if (action === "PLACE" && parts.length === 2) {
      const args = parts[1].split(",");
      const x = parseInt(args[0]);
      const y = parseInt(args[1]);
      const f = args[2];
      if (DIRECTIONS.includes(f)) {
        setState((prevState) => executeCommand(prevState, { type: action }));
      }
    }
  };
  return (
    <div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter command"
      ></input>
      <button onClick={handleCommand}>Execute</button>
      <div>
        <h2>position</h2>
        {state.placed ? (
          <p>
            X: {state.x}, Y: {state.y}, F: {state.f}
          </p>
        ) : (
          <p>Not placed</p>
        )}
      </div>
    </div>
  );
};

export default App;
