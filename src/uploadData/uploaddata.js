import { createContext, useContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/confic"; 

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsColRef = collection(db, "products");
    const categoriesColRef = collection(db, "categories");

    console.log(productsColRef);
    

    let productsLoaded = false;
    let categoriesLoaded = false;

    const unsubProducts = onSnapshot(
      productsColRef,
      (snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        productsLoaded = true;
        if (productsLoaded && categoriesLoaded) setLoading(false);
      },
      (err) => {
        console.error("Error fetching products:", err);
        setError(err);
        setLoading(false);
      }
    );

    const unsubCategories = onSnapshot(
      categoriesColRef,
      (snapshot) => {
        setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        categoriesLoaded = true;
        if (productsLoaded && categoriesLoaded) setLoading(false);
        console.log(products);
        
      },
      (err) => {
        console.error("Error fetching categories:", err);
        setError(err);
        setLoading(false);
      }
    );

   
    return () => {
      unsubProducts();
      unsubCategories();
    };
  }, []);

  return (
    <ProductContext.Provider value={{ product, categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

















