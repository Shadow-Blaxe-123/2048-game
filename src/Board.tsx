import { useBoardStore } from "./store/BoardStore";
import Tile from "./Tile";

export default function Board() {
  const board = useBoardStore((state) => state.board);

  // TODO: Fix the styles so that the page will stop scrolling when arrowUP and arrowDown are pressed.

  return (
    <div className="bg-[#bbada0] p-4 rounded-lg inline-grid grid-cols-4 gap-2">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </div>
  );
}
