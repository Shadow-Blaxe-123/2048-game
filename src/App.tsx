import "./App.css";
import Board from "./Board";
import { useEffect, useRef } from "react";
import GameLogic from "./GameLogic";
import { useBoardStore } from "./store/BoardStore";

function App() {
  // Getting the state from the store.
  const state = useBoardStore((state) => state);
  const gameRef = useRef<GameLogic | null>(null);

  useEffect(() => {
    console.log("App useEffect mount");

    if (!gameRef.current) {
      gameRef.current = new GameLogic(); // ← only runs once!
    }

    return () => {
      console.log("App useEffect unmount");
      gameRef.current?.destroy();
      gameRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <nav
        className={`flex items-center justify-around p-5 ${
          state.UImode === "light" ? "bg-yellow-200" : "bg-black"
        }`}
      >
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
        <div>
          <button
            className="p-2 text-3xl font-black text-blue-500 border-2 hover:cursor-pointer rounded-2xl hover:bg-blue-400 hover:text-white"
            onClick={gameRef.current?.startNewGame}
          >
            New Game
          </button>
          <label className="inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={state.switchMode}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-2xl font-bold text-violet-800">
              Dark Mode
            </span>
          </label>
        </div>
      </nav>
      <div
        className={`flex justify-center items-center ${
          state.UImode === "light" ? "bg-[#faf8ef]" : "bg-gray-900"
        } flex-1/2`}
      >
        <Board />
      </div>
    </div>
  );
}

export default App;
