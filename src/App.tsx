import "./App.css";
import Board from "./Board";
import { useEffect } from "react";
import GameLogic from "./GameLogic";
import { useBoardStore } from "./store/BoardStore";

function App() {
  // Getting the state from the store.
  const state = useBoardStore((state) => state);
  useEffect(() => {
    const game = new GameLogic(); // Create a new GameLogic instance the moment the component mounts or the page loads.

    return () => {
      game.destroy(); // Clean up when component unmounts
    };
  }, []);
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-around p-5 bg-yellow-200">
        <div className="font-serif text-6xl font-bold text-green-800">2048</div>
        <div className="flex justify-center font-mono text-2xl font-bold text-green-500 align-middle w-xs">
          <div className="w-1/2 text-center">
            <div>Score</div>
            <div>{state.score}</div>
          </div>
          <div className="w-1/2 text-center">
            <div>Best Score</div>
            <div>{state.bestScore}</div>
          </div>
        </div>
        <div
          className="p-2 text-3xl font-black text-blue-500 border-2 hover:cursor-pointer rounded-2xl hover:bg-blue-400 hover:text-white"
          onClick={state.resetBoard}
        >
          New Game
        </div>
      </nav>
      <div className="flex justify-center items-center bg-[#faf8ef] flex-1/2">
        <Board />
      </div>
    </div>
  );
}

export default App;
