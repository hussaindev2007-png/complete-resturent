
import Checkbox from "./Checkbox";

function CategoryFilter({ categories, selectedCategories, onChangeCategory }) {
  return (
    <div className="w-full max-w-xs bg-gradient-to-br from-sky-600 via-sky-800 to-black border border-gray-700 shadow-xl rounded-2xl p-5 space-y-3 hover:shadow-2xl transition-all duration-300">
      <h3 className="font-semibold text-lg text-white border-b border-gray-600 pb-2">
        Category Filter
      </h3>

      <div className="space-y-2 pt-1">
        {categories.map((category) => (
          <Checkbox
            key={category.id}
            text={category.title}
            checked={selectedCategories.includes(category.title)}
            onChange={(e) => onChangeCategory(category.title, e.target.checked)}
            className="text-white hover:bg-white/10 p-1 rounded-md transition"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
