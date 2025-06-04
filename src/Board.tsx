import { useBoardStore } from "./store/BoardStore";
import Tile from "./Tile";

export default function Board() {
  const state = useBoardStore((state) => state);

  return (
    <div className="bg-[#bbada0] p-4 rounded-lg inline-grid grid-cols-4 gap-2">
      {state.board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </div>
  );
}
