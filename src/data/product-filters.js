
export const getVisibleProducts = (
  products = [],
  selectedCategories = [],
  selectedRating = 0,
  initPriceRange,
  sortOption = "none",
  search = ""
) => {
  let filtered = [...products];

 
  if (selectedCategories.length > 0) {
    filtered = filtered.filter(product =>
      selectedCategories.includes(product.category)
    );
  }


  if (selectedRating) {
    filtered = filtered.filter(product => product.rating >= selectedRating);
  }


  if (initPriceRange?.min !== undefined && initPriceRange?.max !== undefined) {
    filtered = filtered.filter(
      product =>
        product.price >= initPriceRange.min &&
        product.price <= initPriceRange.max
    );
  }


  if (search.trim() !== "") {
    filtered = filtered.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sortOption === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
};
