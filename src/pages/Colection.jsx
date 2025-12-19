
import { useState, useEffect } from "react";
import CategoryFilter from "../component/CategoryFilter";
import RatingFilter from "../component/RatingFilter";
import HandlePrice from "../component/handleprice";
import Filter from "../component/filter";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/confic";
import { getVisibleProducts } from "../data/product-filters";
import { Link } from "react-router-dom";
import { useCategories } from "../context/useCategories";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [initPriceRange, setInitPriceRange] = useState({ min: 0, max: 0, currentMin: 0, currentMax: 0 });
  const [sortOption, setSortOption] = useState("none");
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const { categories, loading: loadingCategories } = useCategories();

  useEffect(() => {
    const colRef = collection(db, "products");
    const unsub = onSnapshot(colRef, snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setLoading(false);

      if (data.length > 0) {
        const prices = data.map(p => p.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        setInitPriceRange({ min: minPrice, max: maxPrice, currentMin: minPrice, currentMax: maxPrice });
      }
    });

    return () => unsub();
  }, []);

  const onPriceChange = (range) => {
    setInitPriceRange(prev => ({
      ...prev,
      currentMin: Math.min(range.currentMin, range.currentMax),
      currentMax: Math.max(range.currentMin, range.currentMax)
    }));
  };

  const onChangeCategoryHandler = (category, isChecked) => {
    setSelectedCategories(prev =>
      isChecked ? [...prev, category] : prev.filter(cat => cat !== category)
    );
  };

  const onChangeRatingHandler = (rating) => setSelectedRating(Number(rating));

  const filteredProducts = getVisibleProducts(
    products,
    selectedCategories,
    selectedRating,
    { min: initPriceRange.currentMin, max: initPriceRange.currentMax },
    sortOption,
    search
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Filter
        setInitPriceRange={setInitPriceRange}
        setSelectedCategories={setSelectedCategories}
        setSelectedRating={setSelectedRating}
        selectedCategories={selectedCategories}
        selectedRating={selectedRating}
        initPriceRange={initPriceRange}
        setSortOption={setSortOption}
        sortOption={sortOption}
        filteredProducts={filteredProducts}
        setShowSearch={setShowSearch}
        search={search}
        showSearch={showSearch}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-2 space-y-4">
          {loadingCategories ? (
            <p className="text-white">Loading categories...</p>
          ) : (
            <CategoryFilter
              categories={categories}
              selectedCategories={selectedCategories}
              onChangeCategory={onChangeCategoryHandler}
            />
          )}
          <HandlePrice initPriceRange={initPriceRange} onPriceChange={onPriceChange} />
          <RatingFilter onChangeRating={onChangeRatingHandler} selectedRating={selectedRating} />
        </div>

        <div className="col-span-12 md:col-span-10">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center py-20 text-gray-500">No products found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <div key={p.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                 <Link to={`/products/${p.id}`}>
  <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-md mb-3" />
</Link>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                    <p className="text-gray-600 mb-1 text-sm">{p.description}</p>
                    <p className="text-gray-800 font-medium mb-1">Price: ${p.price}</p>
                    <p className="text-yellow-500 font-medium mb-3">Rating: {p.rating} ⭐</p>
                  </div>
                 <Link to={`/ADD`}>
  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mt-2">
    Add to Cart
  </button>
</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

