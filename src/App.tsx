import "./App.css";

function App() {
  return (
    <>
      <nav className="flex items-center justify-around m-5">
        <div className="text-6xl font-bold font-serif text-green-800">2048</div>
        <div className="flex text-2xl text-green-500 font-mono font-bold">
          <div>Score</div>
          <div>Best Score</div>
        </div>
        <div className="w-1/3">New Game</div>
      </nav>
    </>
  );
}

export default App;
