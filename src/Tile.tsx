type Props = {
  value: number;
};

export default function Tile({ value }: Props) {
  // This function returns the color of the tile based on its value
  const getTileColor = (val: number): string => {
    const map: Record<number, string> = {
      0: "bg-[#cdc1b4]",
      2: "bg-[#eee4da]",
      4: "bg-[#ede0c8]",
      8: "bg-[#f2b179] text-white",
      16: "bg-[#f59563] text-white",
      32: "bg-[#f67c5f] text-white",
      64: "bg-[#f65e3b] text-white",
      128: "bg-[#edcf72] text-white",
      256: "bg-[#edcc61] text-white",
      512: "bg-[#edc850] text-white",
      1024: "bg-[#edc53f] text-white",
      2048: "bg-[#edc22e] text-white",
    };
    return map[val] || "bg-black text-white";
  };

  return (
    <div
      className={`w-20 h-20 flex items-center justify-center font-bold text-2xl rounded transition-all duration-150 ${getTileColor(
        value
      )}`}
    >
      {value !== 0 ? value : ""}
    </div>
  );
}
