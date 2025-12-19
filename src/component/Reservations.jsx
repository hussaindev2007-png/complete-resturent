
import Navbar from "./Navbar";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialReservations = [
  { id: 1, customer: "Ali Khan", date: "2025-12-03", time: "7:00 PM", people: 4, status: "Confirmed" },
  { id: 2, customer: "Sara Ali", date: "2025-12-03", time: "8:00 PM", people: 2, status: "Pending" },
  { id: 3, customer: "Ahmed Raza", date: "2025-12-04", time: "6:30 PM", people: 3, status: "Cancelled" },
  { id: 4, customer: "Zara Khan", date: "2025-12-04", time: "7:30 PM", people: 5, status: "Confirmed" },
];

export default function Reservations() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this reservation?")) {
      setReservations(reservations.filter(res => res.id !== id));
      toast.success("Reservation deleted!");
    }
  };

  const handleEditStatus = (id) => {
    const newStatus = prompt("Enter new status (Pending, Confirmed, Cancelled):");
    if (!newStatus) {
      toast.error("Status cannot be empty!");
      return;
    }
    setReservations(reservations.map(res => res.id === id ? { ...res, status: newStatus } : res));
    toast.success("Reservation status updated!");
  };

  const handleAdd = () => {
    const customer = prompt("Enter customer name:");
    const date = prompt("Enter reservation date (YYYY-MM-DD):");
    const time = prompt("Enter reservation time (e.g., 7:00 PM):");
    const people = parseInt(prompt("Number of people:"), 10);
    const status = prompt("Enter status (Pending, Confirmed, Cancelled):");

    if (!customer || !date || !time || !people || !status) {
      toast.error("All fields are required!");
      return;
    }

    if (isNaN(people) || people <= 0) {
      toast.error("People must be a positive number!");
      return;
    }

    setReservations([...reservations, { id: Date.now(), customer, date, time, people, status }]);
    toast.success("Reservation added successfully!");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Reservations</h1>
            <button
              onClick={handleAdd}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Reservation
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Customer</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left">People</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res, index) => (
                  <motion.tr
                    key={res.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="py-3 px-6">{res.id}</td>
                    <td className="py-3 px-6">{res.customer}</td>
                    <td className="py-3 px-6">{res.date}</td>
                    <td className="py-3 px-6">{res.time}</td>
                    <td className="py-3 px-6">{res.people}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-2 py-1 rounded font-semibold text-sm ${
                          res.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : res.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center flex gap-2 justify-center">
                      <button
                        onClick={() => handleEditStatus(res.id)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(res.id)}
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
