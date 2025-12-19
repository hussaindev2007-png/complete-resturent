
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify"; // ToastContainer root me hona chahiye
import 'react-toastify/dist/ReactToastify.css';

const initialOrders = [
  { id: 1, customer: "Ali Khan", item: "Pizza", qty: 2, status: "Pending" },
  { id: 2, customer: "Sara Ali", item: "Burger", qty: 1, status: "Completed" },
  { id: 3, customer: "Ahmed Raza", item: "Pasta", qty: 3, status: "Preparing" },
  { id: 4, customer: "Zara Khan", item: "Salad", qty: 1, status: "Cancelled" },
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter(order => order.id !== id));
      toast.success("Order deleted!");
    }
  };

  const handleEditStatus = (id) => {
    const newStatus = prompt("Enter new status (Pending, Preparing, Completed, Cancelled):");
    if (newStatus) {
      setOrders(
        orders.map(order => order.id === id ? { ...order, status: newStatus } : order)
      );
      toast.success("Order status updated!");
    }
  };

  const handleAddOrder = () => {
    const customer = prompt("Enter customer name:");
    const item = prompt("Enter item name:");
    const qty = parseInt(prompt("Enter quantity:"), 10);
    const status = prompt("Enter status (Pending, Preparing, Completed, Cancelled):");

    if (!customer || !item || !qty || !status) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(qty) || qty <= 0) {
      toast.error("Quantity must be a positive number!");
      return;
    }

    setOrders([...orders, { id: Date.now(), customer, item, qty, status }]);
    toast.success("Order added successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Orders</h1>
            <button
              onClick={handleAddOrder}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add New Order
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Customer</th>
                  <th className="py-3 px-6 text-left">Item</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="py-3 px-6">{order.id}</td>
                    <td className="py-3 px-6">{order.customer}</td>
                    <td className="py-3 px-6">{order.item}</td>
                    <td className="py-3 px-6">{order.qty}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-2 py-1 rounded font-semibold text-sm ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Preparing"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center flex gap-2 justify-center">
                      <button
                        onClick={() => handleEditStatus(order.id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
