import { create } from "zustand";

type State = {
  board: number[][];
  bestScore: number;
  score: number;
  UImode: string;
};

interface SetState {
  resetBoard: () => void;
  switchMode: () => void;
}

// Making the state.
export const useBoardStore = create<State & SetState>((set) => ({
  // State Values:
  UImode: "light",
  board: [
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 32, 0],
    [0, 0, 0, 0],
  ],
  bestScore: 0,
  score: 0,
  // SetState Functions:
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
