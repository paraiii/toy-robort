import React, { useState } from "react";
import { RobotCommands } from "./components/RobotCommands";
import { Grid } from "./components/Grid";

export const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: "NORTH" });
  const moveForward = () => {
    let { x, y, direction } = position;

    switch (direction) {
      case "NORTH":
        if (y > 0) y--;
        break;
      case "SOUTH":
        if (y < 4) y++;
        break;
      case "EAST":
        if (x < 4) x++;
        break;
      case "WEST":
        if (x > 0) x--;
        break;
      default:
        break;
    }

    setPosition({ x, y, direction });
  };

  const rotateLeft = () => {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const newDirection =
      directions[(directions.indexOf(position.direction) + 3) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  const rotateRight = () => {
    const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
    const newDirection =
      directions[(directions.indexOf(position.direction) + 1) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  return (
    <div className="App">
      <h1>Robot on a 5x5 Grid</h1>
      <Grid robotPosition={position} />
      {/* Pass robot's position as props to Grid */}
      <div className="robot-controls">
        <p>
          Position: ({position.x}, {position.y})
        </p>
        <p>Facing: {position.direction}</p>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};
