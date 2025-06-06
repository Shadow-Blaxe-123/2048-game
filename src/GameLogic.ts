import _ from "lodash";

type Direction = "left" | "right" | "up" | "down";

export default class GameLogic {
  private board: number[][];
  private setBoard: (board: number[][]) => void;
  constructor(board: number[][], setBoard: (board: number[][]) => void) {
    this.board = board;
    this.setBoard = setBoard;
    this.setupInput();
  }

  // ChatGPT

  /**
   * Move left helper — slides and merges one row to the left.
   * Mutates the row array in place.
   */
  private moveLeft(row: number[]): number[] {
    const size = 4;
    const filtered = row.filter((x) => x !== 0); // remove zeros

    const merged: number[] = [];
    let skip = false;

    for (let i = 0; i < filtered.length; i++) {
      if (skip) {
        skip = false;
        continue;
      }
      if (filtered[i] === filtered[i + 1]) {
        merged.push(filtered[i] * 2);
        skip = true; // skip next item because merged
      } else {
        merged.push(filtered[i]);
      }
    }

    // fill the rest with zeros
    while (merged.length < size) merged.push(0);

    return merged;
  }

  /**
   * Moves the grid in the specified direction.
   * Returns a **new grid** without mutating the original.
   */
  private moveGrid(direction: Direction): number[][] {
    let workingGrid = _.cloneDeep(this.board); // deep copy to avoid mutation

    // For up/down, transpose the grid to work with rows
    if (direction === "up" || direction === "down") {
      workingGrid = _.zip(...workingGrid) as number[][];
    }

    // For right/down, reverse each row (we'll move left then reverse back)
    if (direction === "right" || direction === "down") {
      workingGrid = workingGrid.map((row) => row.slice().reverse());
    }

    // Move left on each row
    workingGrid = workingGrid.map((row) => this.moveLeft(row));

    // Reverse back if right/down
    if (direction === "right" || direction === "down") {
      workingGrid = workingGrid.map((row) => row.slice().reverse());
    }

    // Transpose back if up/down
    if (direction === "up" || direction === "down") {
      workingGrid = _.zip(...workingGrid) as number[][];
    }

    return workingGrid;
  }

  // Adding Event Listener for keyboard presses.
  private setupInput(): void {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  // The callback for the event listener.

  private handleKeyDown = (e: KeyboardEvent) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    // Chacks if the pressed key is an arrow key.
    if (arrowKeys.includes(e.key)) {
      const keyMap: Record<string, Direction> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };

      const direction = keyMap[e.key];
      if (direction) {
        this.setBoard(this.moveGrid(direction));
      }
    }
  };

  // Removes the event listener.
  destroy(): void {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
}
