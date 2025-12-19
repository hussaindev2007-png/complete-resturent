


import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/confic";
import { useState, useEffect } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const colRef = collection(db, "categories"); // Firestore collection

    const unsub = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCategories(data);
      setLoading(false);
    });

    return () => unsub(); // cleanup
  }, []);

  return { categories, loading };
};
