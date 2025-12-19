import { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../contextcart/context";

export default function Checkout() {
  const { cartItems, totalCartPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully!");

    clearCart(); // ⚠️ you forgot to call this function earlier

    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Your cart is empty</h2>
        <p>Please add some products before checkout.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">
            Order Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id + (item.CardGifts || "")}
                className="flex flex-col items-center border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />

                <div className="flex flex-col items-center text-center">
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-500 text-sm">
                    Gift: {item.CardGifts || "None"}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Qty: {item.quantity}
                  </p>
                  <p className="font-bold text-blue-600 mt-1">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right font-bold text-xl border-t pt-4">
            Total: ${totalCartPrice}
          </div>
        </div>

        {/* Shipping Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
