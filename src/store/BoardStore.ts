import { create } from "zustand";

type State = {
  board: number[][];
  bestScore: number;
  score: number;
};

type SetState = {
  resetBoard: () => void;
};

// Making the state.
export const useBoardStore = create<State & SetState>((set) => ({
  // State Values:
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
}));
