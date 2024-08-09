import React from "react";
import "./Grid.css";

const Grid = ({ robot }) => {
  const createGrid = () => {
    let grid = [];
    for (let y = 4; y >= 0; y--) {
      let row = [];
      for (let x = 0; x < 5; x++) {
        row.push(
          <div className="cell" key={`${x},${y}`}>
            {robot.x === x && robot.y === y && (
              <div className={`robot ${robot.f.toLowerCase()}`}>🤖</div>
            )}
          </div>
        );
      }
      grid.push(
        <div className="row" key={y}>
          {row}
        </div>
      );
    }
    return grid;
  };

  return <div className="grid">{createGrid()}</div>;
};

export default Grid;
