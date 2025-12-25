interface PlateCellProps {
  value: string | number;
  covered: boolean;
}

const PlateCell = ({ value, covered }: PlateCellProps) => {
  return (
    <div className="relative w-12 h-14 flex items-center justify-center bg-yellow-400 border rounded overflow-hidden">
      <span className="z-10 font-bold text-2xl text-black">{value}</span>
      {/* SHUTTER */}
      <div
        className={`absolute inset-0 bg-black transition-transform duration-500 ease-in-out
          ${covered ? "translate-y-0" : "-translate-y-full"}
        `}
      />
    </div>
  );
};

export default PlateCell;
