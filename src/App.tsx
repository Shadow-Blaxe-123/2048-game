import "./App.css";

function App() {
  return (
    <>
      <nav className="flex items-center justify-around m-5">
        <div className="text-6xl font-bold font-serif text-green-800">2048</div>
        <div className="flex justify-between">
          <div>Score</div>
          <div>Best Score</div>
        </div>
        <div>New Game</div>
      </nav>
    </>
  );
}

export default App;
