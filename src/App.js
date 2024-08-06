import React, { useState } from "react";
import { executeCommand, DIRECTIONS } from "./components/commands";

const App = () => {
  const [state, setState] = useState({ x: 0, y: 0, f: "NORTH", placed: false });
  const [command, setCommand] = useState("");

  const handleCommand = () => {
    const parts = command.trim().split(" ");
    const action = parts[0];

    if (action === "PLACE" && parts.length === 2) {
      const args = parts[1].split(",");
      const x = parseInt(args[0]);
      const y = parseInt(args[1]);
      const f = args[2];
      if (DIRECTIONS.includes(f)) {
        setState((prevState) =>
          executeCommand(prevState, { type: "PLACE", x, y, f })
        );
      }
    } else if (["MOVE", "LEFT", "RIGHT", "REPORT"].includes(action)) {
      setState((prevState) => executeCommand(prevState, { type: action }));
    }

    setCommand("");
  };

  return (
    <div>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter command"
      />
      <button onClick={handleCommand}>Execute</button>
      <div>
        <h2> Position</h2>
        {state.placed ? (
          <p>
            X: {state.x}, Y: {state.y}, F: {state.f}
          </p>
        ) : (
          <p>The robot is not placed on the table</p>
        )}
      </div>
    </div>
  );
};

export default App;
