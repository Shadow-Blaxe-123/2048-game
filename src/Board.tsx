import React from "react";
import { useBoardStore } from "./store/BoardStore";
import Tile from "./Tile";

const Board: React.FC = () => {
  const board = useBoardStore((state) => state.board);

  return (
    <div className="bg-[#bbada0] p-4 rounded-lg inline-grid grid-cols-4 gap-2">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} value={value} />
        ))
      )}
    </div>
  );
};

export default Board;
