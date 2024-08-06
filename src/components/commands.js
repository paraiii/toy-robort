export const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"];
export const TABLESIZE = 5;

export function isValidPosition(x, y) {
  return x >= 0 && x < TABLESIZE && y >= 0 && y < TABLESIZE;
}

export function executeCommand(state, command) {
  const { x, y, f } = state;
  switch (command.type) {
    case "PLACE":
      if (isValidPosition(state, command)) {
        return {
          ...state,
          x: command.x,
          u: command.y,
          f: command.f,
          placed: true,
        };
      }
      return state;
    case "MOVE":
      if (!state.place) return state;
      let newX = x;
      let newY = y;

      switch (f) {
        case "NORTH":
          newY += 1;
          break;
        case "South":
          newY -= 1;
          break;
        case "EAST":
          newX += 1;
          break;
        case "WEST":
          newX -= 1;
          break;
        default:
          break;
      }
      if (isValidPosition(newX, newY)) {
        return {
          ...state,
          x: newX,
          y: newY,
        };
      }
      return state;

    case "LEFT":
      if (!state.place) return state;
      return {
        ...state,
        f: DIRECTIONS[(DIRECTIONS.indexOf(f) + 3) % 4],
      };
    case "RIGHT":
      if (!state.place) return state;
      return {
        ...state,
        f: DIRECTIONS[(DIRECTIONS.indexOf(f) + 1) % 4],
      };
    case "REPORT":
      if (!state.place) return state;
      console.log("Output: $(x), $(y), $(f)");
      return state;
  }
}
