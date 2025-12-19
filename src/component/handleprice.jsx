
function HandlePrice({ initPriceRange, onPriceChange }) {
  if (!initPriceRange.min || !initPriceRange.max) return null; // loading

  const min = initPriceRange.min;
  const max = initPriceRange.max;
  const currentMin = initPriceRange.currentMin ?? min;
  const currentMax = initPriceRange.currentMax ?? max;

  // calculate gradient width and start position
  const totalRange = max - min;
  const leftPercent = ((currentMin - min) / totalRange) * 100;
  const rightPercent = ((currentMax - min) / totalRange) * 100;

  return (
    <div className="bg-black rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-800">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-gray-300 font-semibold text-lg mb-4">
        Filter by Price
      </h3>

      <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* gradient between min and max */}
        <div
          className="absolute h-full bg-gradient-to-r from-sky-500 via-sky-400 to-gray-900"
          style={{
            left: `${leftPercent}%`,
            width: `${rightPercent - leftPercent}%`,
          }}
        />
        {/* min slider */}
        <input
          type="range"
          min={min}
          max={max}
          step="10"
          value={currentMin}
          onChange={(e) =>
            onPriceChange({ ...initPriceRange, currentMin: Number(e.target.value) })
          }
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
        />
        {/* max slider */}
        <input
          type="range"
          min={min}
          max={max}
          step="10"
          value={currentMax}
          onChange={(e) =>
            onPriceChange({ ...initPriceRange, currentMax: Number(e.target.value) })
          }
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer"
        />
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #000000);
          border: 2px solid #fff;
          box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
          transition: all 0.2s ease;
        }
      `}</style>

      <div className="flex justify-between mt-3 text-gray-300 font-medium">
        <span>${currentMin}</span>
        <span>${currentMax}</span>
      </div>
    </div>
  );
}

export default HandlePrice;
