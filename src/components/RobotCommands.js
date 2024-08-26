import React, { useState } from "react";

const directions = ["NORTH", "EAST", "WEST", "SOUTH"];

export const RobotCommands = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: "NORTH" });

  //Move robot forward
  const moveForward = () => {
    let { x, y, direction } = position;
    switch (direction) {
      case "NORTH":
        if (y > 0) y--;
        break;
      case "SOUTH":
        if (y < 4) y++;
        break;
      case "WEST":
        if (x > 0) x--;
        break;
      case "EAST":
        if (x < 4) x++;
        break;
      default:
        break;
    }
    setPosition({ x, y, direction }); //Update robot's position
  };

  //Turn 90 degree left
  const rotateLeft = () => {
    const newDirection =
      directions[(directions.indexOf(position.direction) + 3) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  //Turn Right
  const rotateRight = () => {
    const newDirection =
      directions[(directions.indexOf(position.direction) + 1) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  return (
    <div>
      <p>
        Position: ({position.x}, {position.y})
      </p>
      <p>Facing: {position.direction}</p>
      <button onClick={moveForward}>Move Forward</button>
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
    </div>
  );
};
