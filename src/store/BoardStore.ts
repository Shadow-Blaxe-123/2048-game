import { create } from "zustand";

// Making the state.
export const useBoardStore = create(() => ({
  board: [
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [0, 0, 32, 0],
    [0, 0, 0, 0],
  ],
}));
