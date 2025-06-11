import _ from "lodash";
import { useBoardStore } from "./store/BoardStore";
// import { use } from "react";

type Direction = "left" | "right" | "up" | "down";

export default class GameLogic {
  private setBoard = useBoardStore.getState().setBoard;
  // Making Sure that the event listener && startNewGame() is only added once.
  private static eventListenerAdded = false;
  private static objectInstantiated = false;
  constructor() {
    if (!GameLogic.objectInstantiated) {
      GameLogic.objectInstantiated = true;
      this.startNewGame();
    }
    if (!GameLogic.eventListenerAdded) this.setupInput();
  }

  // Getter for the board.
  private get board(): number[][] {
    return useBoardStore.getState().board;
  }

  /**
   * Move left helper — slides and merges one row to the left.
   * Mutates the row array in place.
   */
  private moveLeft(row: number[]) {
    const size = 4;
    const filtered = row.filter((x) => x !== 0); // remove zeros

    const merged: number[] = [];
    let scoreGained: number = 0;
    let skip: boolean = false;

    for (let i = 0; i < filtered.length; i++) {
      if (skip) {
        skip = false;
        continue;
      }
      if (filtered[i] === filtered[i + 1]) {
        const mergedValue: number = filtered[i] * 2;
        merged.push(mergedValue);
        scoreGained += mergedValue;
        skip = true; // skip next item because merged
      } else {
        merged.push(filtered[i]);
      }
    }

    // fill the rest with zeros
    while (merged.length < size) merged.push(0);

    return {
      newRow: merged,
      scoreGained,
    };
  }

  /**
   * Moves the grid in the specified direction.
   * Returns a **new grid** without mutating the original.
   */
  private moveGrid(direction: Direction): number[][] {
    let workingGrid = _.cloneDeep(this.board); // deep copy to avoid mutation
    let totalScore: number = 0;

    // For up/down, transpose the grid to work with rows
    if (direction === "up" || direction === "down") {
      workingGrid = _.zip(...workingGrid) as number[][];
    }

    // For right/down, reverse each row (we'll move left then reverse back)
    if (direction === "right" || direction === "down") {
      workingGrid = workingGrid.map((row) => row.slice().reverse());
    }

    // Move left on each row
    // workingGrid = workingGrid.map((row) => this.moveLeft(row));
    workingGrid = workingGrid.map((row) => {
      const { newRow, scoreGained } = this.moveLeft(row);
      totalScore += scoreGained;
      return newRow;
    });

    // Reverse back if right/down
    if (direction === "right" || direction === "down") {
      workingGrid = workingGrid.map((row) => row.slice().reverse());
    }

    // Transpose back if up/down
    if (direction === "up" || direction === "down") {
      workingGrid = _.zip(...workingGrid) as number[][];
    }
    useBoardStore.getState().increaseScore(totalScore);
    return workingGrid;
  }

  // Adds Random Tile
  private addRandomTile(): void {
    const currentBoard = _.cloneDeep(this.board); // 🟢 clone before doing anything
    const emptyTiles: [number, number][] = [];

    for (let row = 0; row < currentBoard.length; row++) {
      for (let col = 0; col < currentBoard[row].length; col++) {
        if (currentBoard[row][col] === 0) {
          emptyTiles.push([row, col]);
        }
      }
    }

    if (emptyTiles.length === 0) return;

    const [randRow, randCol] =
      emptyTiles[Math.floor(Math.random() * emptyTiles.length)];

    currentBoard[randRow][randCol] = Math.random() < 0.5 ? 2 : 4;

    this.setBoard(currentBoard);
  }

  // Adding Event Listener for keyboard presses.
  private setupInput(): void {
    window.addEventListener("keydown", this.handleKeyDown);
    GameLogic.eventListenerAdded = true;
  }
  // The callback for the event listener.

  private handleKeyDown = (e: KeyboardEvent) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    this.isGameOver();
    useBoardStore.getState().setBestScore();

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
        this.addRandomTile();
      }
    }
  };
  // Self-explanatory
  public startNewGame = (): void => {
    useBoardStore.getState().resetBoard();
    console.log("New Game");
    setTimeout(() => {
      this.addRandomTile();
      this.addRandomTile();
    }, 100);
  };
  // Checks if the game is over
  private isGameOver(): boolean {
    const board = this.board;

    // 1. If any cell is 0 → not game over
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (board[row][col] === 0) return false;

        // 2. Check right neighbor
        if (col < 3 && board[row][col] === board[row][col + 1]) return false;

        // 3. Check bottom neighbor
        if (row < 3 && board[row][col] === board[row + 1][col]) return false;
      }
    }

    // No empty cells and no possible merges
    alert("Game Over!");
    // this.destroy();
    // this.startNewGame();
    // useBoardStore.getState().setGameOver();
    return true;
  }

  // Removes the event listener.
  destroy(): void {
    // window.removeEventListener("keydown", this.handleKeyDown);
    // useBoardStore.getState().resetBoard();
    if (GameLogic.eventListenerAdded) {
      window.removeEventListener("keydown", this.handleKeyDown);
      // useBoardStore.getState().resetBoard();
      GameLogic.eventListenerAdded = false;
    }
  }
}
