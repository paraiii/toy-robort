import React, { useState } from "react";
import { Grid } from "./components/Grid";
import "./App.css";

const directions = ["NORTH", "EAST", "SOUTH", "WEST"];

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

  //Function to rotate the direction to the left
  const rotateLeft = () => {
    const newDirection =
      directions[(directions.indexOf(position.direction) + 3) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  //Function to rotate the direction to the right
  const rotateRight = () => {
    const newDirection =
      directions[(directions.indexOf(position.direction) + 1) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  //Reset the position
  const resetPosition = () => {
    setPosition({ x: 0, y: 0, direction: "NORTH" });
  };

  return (
    <div className="app">
      <h1>Robot on a 5x5 Grid</h1>
      <div className="grid-with-directions">
        <div className="direction north">N</div>
        <div className="direction west">W</div>
        <Grid robotPosition={position} />
        <div className="direction east">E</div>
        <div className="direction south">S</div>
      </div>
      {/* Pass robot's position as props to Grid */}
      <div className="robot-controls">
        <p>
          Position: ({position.x}, {position.y})
        </p>
        <p>Facing: {position.direction}</p>
        <div className="buttons-container">
          <button onClick={rotateLeft}>Rotate Left</button>
          <button onClick={rotateRight}>Rotate Right</button>
          <button onClick={moveForward}>Move Forward</button>
          <button onClick={resetPosition} className="reset-button">
            Reset Position
          </button>
        </div>
      </div>
    </div>
  );
};
