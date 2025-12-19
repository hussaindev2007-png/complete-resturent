
import ProductCard from "./ProductCard";

function Products({ products = [], selectedRating = 0, search = "" }) {
  // Safety filter for search
  const searchedProducts = products.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(search.toLowerCase())
  );

  // No products at all
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg py-10">
        No matching products
      </div>
    );
  }

  // Search exists but nothing matches
  if (searchedProducts.length === 0 && search.trim() !== "") {
    return (
      <p
        style={{
          color: "#04d7f3ff",
          marginTop: "15px",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        No products found for "<strong>{search}</strong>"
      </p>
    );
  }

  // Display filtered & searched products
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {searchedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedRating={selectedRating}
        />
      ))}
    </div>
  );
}

export default Products;
