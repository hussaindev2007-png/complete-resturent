
import { useParams } from "react-router-dom";
import { useCart } from "../contextcart/context";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/confic";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [singleProduct, setSingleProduct] = useState(null);

  const gifts = [
    { id: 1, name: "Coca-Cola (Tin Pack)" },
    { id: 2, name: "Pepsi (Tin Pack)" },
    { id: 3, name: "Sprite (Tin Pack)" },
    { id: 4, name: "Fanta (Tin Pack)" },
    { id: 5, name: "Cola Next (Tin Pack)" },
    { id: 6, name: "Rango Next (Tin Pack)" },
    { id: 7, name: "Fizup Next (Tin Pack)" },
  ];

  const [selectedGift, setSelectedGift] = useState(gifts[0].name);

  useEffect(() => {
    const fetchProduct = async () => {
      const q = query(
        collection(db, "products"),
        where("id", "==", Number(id))
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        setSingleProduct(snap.docs[0].data());
      }
    };
    fetchProduct();
  }, [id]);

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-semibold animate-pulse">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-6">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={singleProduct.image}
            alt={singleProduct.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
          <span className="absolute top-4 left-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full">
            Free Gift 🎁
          </span>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {singleProduct.title}
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              {singleProduct.description}
            </p>

            {/* GIFT */}
            <div className="mt-6">
              <label className="block font-semibold mb-2 text-gray-800">
                Choose your free gift
              </label>
              <select
                value={selectedGift}
                onChange={(e) => setSelectedGift(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {gifts.map((gift) => (
                  <option key={gift.id} value={gift.name}>
                    {gift.name}
                  </option>
                ))}
              </select>
            </div>

            {/* PRICE */}
            <div className="mt-6 flex items-center gap-6">
              <p className="text-3xl font-bold text-blue-600">
                ${singleProduct.price}
              </p>
              <p className="text-gray-500">
                Total: <span className="font-semibold text-black">
                  ${qty * singleProduct.price}
                </span>
              </p>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setQty(qty - 1)}
                disabled={qty === 1}
                className="w-10 h-10 rounded-full border text-xl disabled:opacity-40"
              >
                −
              </button>

              <span className="text-xl font-semibold">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                disabled={qty === 5}
                className="w-10 h-10 rounded-full border text-xl disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => {
              addToCart(singleProduct, qty, selectedGift)
              
              toast.success(`Added ${qty} item + ${selectedGift}`);
            }}
            className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold hover:scale-[1.02] transition-transform"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
