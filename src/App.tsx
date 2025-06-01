import "./App.css";

function App() {
  return (
    <>
      <nav className="flex items-center justify-around m-5">
        <div className="font-serif text-6xl font-bold text-green-800">2048</div>
        <div className="flex justify-center font-mono text-2xl font-bold text-green-500 align-middle w-xs">
          <div className="w-1/2 text-center">Score</div>
          <div className="w-1/2 text-center">Best Score</div>
        </div>
        <div className="p-2 text-3xl font-black text-blue-500 border-2 hover:cursor-pointer rounded-2xl hover:bg-blue-200">
          New Game
        </div>
      </nav>
    </>
  );
}

export default App;
