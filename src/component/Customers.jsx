
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialCustomers = [
  { id: 1, name: "Ali Khan", email: "ali@example.com", phone: "0300-1234567", totalOrders: 5 },
  { id: 2, name: "Sara Ali", email: "sara@example.com", phone: "0301-7654321", totalOrders: 3 },
  { id: 3, name: "Ahmed Raza", email: "ahmed@example.com", phone: "0302-1112223", totalOrders: 2 },
  { id: 4, name: "Zara Khan", email: "zara@example.com", phone: "0303-9876543", totalOrders: 7 },
];

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
      toast.success("Customer deleted!");
    }
  };

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");
    const newPhone = prompt("Enter new phone number:");
    const newOrders = parseInt(prompt("Enter total orders:"), 10);

    if (!newName || !newEmail || !newPhone || isNaN(newOrders)) {
      toast.error("All fields are required and total orders must be a number!");
      return;
    }

    setCustomers(customers.map(c => c.id === id ? {
      ...c, name: newName, email: newEmail, phone: newPhone, totalOrders: newOrders
    } : c));
    toast.success("Customer updated!");
  };

  const handleAdd = () => {
    const name = prompt("Enter customer name:");
    const email = prompt("Enter customer email:");
    const phone = prompt("Enter customer phone:");
    const totalOrders = parseInt(prompt("Total orders:"), 10);

    if (!name || !email || !phone || isNaN(totalOrders)) {
      toast.error("All fields are required and total orders must be a number!");
      return;
    }

    setCustomers([...customers, { id: Date.now(), name, email, phone, totalOrders }]);
    toast.success("Customer added successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Customers</h1>
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Customer
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Phone</th>
                  <th className="py-3 px-6 text-left">Total Orders</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((cust, index) => (
                  <motion.tr
                    key={cust.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="py-3 px-6">{cust.id}</td>
                    <td className="py-3 px-6">{cust.name}</td>
                    <td className="py-3 px-6">{cust.email}</td>
                    <td className="py-3 px-6">{cust.phone}</td>
                    <td className="py-3 px-6">{cust.totalOrders}</td>
                    <td className="py-3 px-6 text-center flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(cust.id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(cust.id)}
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
