
function SortProduct({ sort, setSort }) {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-300">Sort:</span>
      <select
        value={sort}
        onChange={handleSortChange}
        className="bg-gray-800 text-white px-3 py-1 rounded-lg cursor-pointer"
      >
        <option value="none">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating: High to Low</option>
      </select>
    </div>
  );
}

export default SortProduct;

