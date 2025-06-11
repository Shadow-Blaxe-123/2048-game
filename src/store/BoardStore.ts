import { create } from "zustand";

// Types for the state
type State = {
  board: number[][];
  bestScore: number;
  score: number;
  UImode: "light" | "dark";
  // gameOver: boolean;
};

// Types for the setStateq functoins
export interface SetState {
  resetBoard: () => void;
  switchMode: () => void;
  setBoard: (board: number[][]) => void;
  // setGameOver: () => void;
}

// Making the state.
export const useBoardStore = create<State & SetState>((set) => ({
  // State Values:
  gameOver: false,
  UImode: "light",
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  bestScore: 0,
  score: 0,
  // SetState Functions:
  setBoard: (board: number[][]) => set({ board }),

  resetBoard: () =>
    set({
      board: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      score: 0,
      // gameOver: false,
    }),
  switchMode: () =>
    set((state) => ({
      UImode: state.UImode === "light" ? "dark" : "light",
    })),
  // setGameOver: () => set({ gameOver: true }),
}));
