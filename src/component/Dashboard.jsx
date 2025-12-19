import { FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt } from "react-icons/fa";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { id: 1, icon: <FaShoppingCart className="text-blue-500 text-3xl" />, label: "Total Orders", value: 120 },
    { id: 2, icon: <FaUtensils className="text-green-500 text-3xl" />, label: "Menu Items", value: 35 },
    { id: 3, icon: <FaCalendarAlt className="text-yellow-500 text-3xl" />, label: "Reservations Today", value: 18 },
    { id: 4, icon: <FaUsers className="text-red-500 text-3xl" />, label: "Total Customers", value: 85 },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex items-center transition-colors duration-300 cursor-pointer"
              >
                <div className="mr-4">{stat.icon}</div>
                <div>
                  <p className="text-gray-500 dark:text-gray-300">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
