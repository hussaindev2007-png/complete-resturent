
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/confic";

let priceRange = { min: 0, max: 0 };
let products = [];


export const loadProducts = async () => {
  const getProducts = collection(db, "products");
  const snapshot = await getDocs(getProducts);

  products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (products.length > 0) {
    let min = products[0].price;
    let max = products[0].price;

    products.forEach((p) => {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    });

    priceRange = { min, max };
  }

  return products;
};

export const getProducts = () => products;
export const getPriceRanges = () => priceRange;






















