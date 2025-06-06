import { create } from "zustand";

// Types for the state
type State = {
  board: number[][];
  bestScore: number;
  score: number;
  UImode: "light" | "dark";
};

// Types for the setStateq functoins
export interface SetState {
  resetBoard: () => void;
  switchMode: () => void;
  setBoard: (board: number[][]) => void;
}

// Making the state.
export const useBoardStore = create<State & SetState>((set) => ({
  // State Values:
  UImode: "light",
  board: [
    [0, 0, 2, 2],
    [0, 32, 0, 0],
    [0, 0, 32, 0],
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
    }),
  switchMode: () =>
    set((state) => ({
      UImode: state.UImode === "light" ? "dark" : "light",
    })),
}));
