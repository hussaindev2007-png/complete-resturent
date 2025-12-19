
import SortProduct from "./sortproduct";
import Search from "./search";

function Filter({
  selectedCategories,
  selectedRating,
  initPriceRange,
  setSelectedRating,
  setSelectedCategories,
  setInitPriceRange,
  setSortOption,
  filteredProducts,
  sortOption,
  setShowSearch,
  search,
  showSearch,
  setSearch,
}) {
  const clearFilter = () => {
    setSelectedCategories([]);
    setSelectedRating(0);
    setInitPriceRange(prev => ({
      ...prev,
      currentMin: prev.min,
      currentMax: prev.max
    }));
    setSortOption("none");
    setSearch("");
  };

  const removeCategory = (cat) =>
    setSelectedCategories(prev => prev.filter(c => c !== cat));
  const removeRating = () => setSelectedRating(0);
  const removePrice = () =>
    setInitPriceRange(prev => ({
      ...prev,
      currentMin: prev.min,
      currentMax: prev.max
    }));

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-900 text-white p-3 rounded-xl mb-6 shadow-md">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold">Filtered By:</span>

        {selectedCategories.map(cat => (
          <span
            key={cat}
            className="bg-zinc-700 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {cat}
            <button
              onClick={() => removeCategory(cat)}
              className="ml-1 text-white hover:text-red-600"
            >
              ✕
            </button>
          </span>
        ))}

        {selectedRating > 0 && (
          <span className="bg-slate-600 px-3 py-1 rounded-full flex items-center gap-2">
            Rating: {selectedRating}
            <button
              onClick={removeRating}
              className="ml-1 text-violet hover:text-red-300"
            >
              ✕
            </button>
          </span>
        )}

        {(initPriceRange.currentMin !== initPriceRange.min ||
          initPriceRange.currentMax !== initPriceRange.max) && (
          <span className="bg-cyan-600 px-3 py-1 rounded-full flex items-center gap-2">
            ${initPriceRange.currentMin} - ${initPriceRange.currentMax}
            <button
              onClick={removePrice}
              className="ml-1 text-white hover:text-red-300"
            >
              ✕
            </button>
          </span>
        )}

        {(selectedCategories.length > 0 ||
          selectedRating > 0 ||
          initPriceRange.currentMin !== initPriceRange.min ||
          initPriceRange.currentMax !== initPriceRange.max) && (
          <button
            onClick={clearFilter}
            className="ml-2 bg-red-900 text-white px-3 py-1 rounded-full hover:bg-red-800"
          >
            Clear All
          </button>
        )}

        <SortProduct
          sort={sortOption}
          setSort={setSortOption}
          filtered={filteredProducts}
        />

        <Search
          search={search}
          showSearch={showSearch}
          setSearch={setSearch}
          setShowSearch={setShowSearch}
        />
      </div>
    </div>
  );
}

export default Filter;
