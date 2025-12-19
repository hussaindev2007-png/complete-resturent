
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase/confic";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
    "https://images.unsplash.com/photo-1563245738-9169ff58eccf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    "https://www.giftjaipur.com/image/cache/catalog/May-2019/kanha-sweets-rasmalai-500x500.jpg",
  ];

  useEffect(() => {
    if (!window.startedCarousel) {
      window.startedCarousel = true;
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const colRef = collection(db, "products");
    const unsub = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden rounded-xl">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${index === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url("${src}")`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">Discover the Latest Food</h1>
          <Link to="/products">
            <button className="cursor-pointer mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">Shop Now</button>
          </Link>
        </div>
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-40">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? "bg-white scale-110" : "bg-gray-400/70"} transition`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-transform hover:scale-105 overflow-hidden">
                <img src={cat.image} alt={cat.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                  <p className="text-gray-600 mt-1">{cat.des}</p>
                  <div className="flex justify-between items-center">
                    <div className="mt-5 font-bold text-lg">Price: {cat.price}$</div>
                    <Link to={`/products/${cat.id}`}>
                      <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                        View Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
