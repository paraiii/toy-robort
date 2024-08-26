import React from "react";
import "./Grid.css";

export const Grid = ({ robotPosition }) => {
  const rows = 5;
  const cols = 5;

  //Receiving robotPosition as props
  const createGrid = () => {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        //Check if robot is exist
        const isRobotHere = robotPosition.x === j && robotPosition.y === i;
        row.push(
          <div key={`${i}-${j}`} className="grid-cell">
            {isRobotHere ? <span className="robot-icon">🤖</span> : null}
          </div>
        );
      }
      grid.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      );
    }
    return grid;
  };
  return <div className="grid-container">{createGrid()}</div>;
};
