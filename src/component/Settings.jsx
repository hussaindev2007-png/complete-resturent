
import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RestaurantInfo from "../Tab/RestaurantInfo";
import ProfileInfo from "../Tab/Profile";
import NotificationsTab from "../Tab/Notifications";
import PaymentTab from "../Tab/Payment";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("restaurant");
  const [editing, setEditing] = useState(false);

  const [restaurantInfo, setRestaurantInfo] = useState({
    name: "Hussain Restaurant",
    address: "house # M-73",
    contact: "0300-1234567",
  });

  const [profileInfo, setProfileInfo] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    reservations: false,
    lowStock: false,
  });

  const [payment, setPayment] = useState({
    taxRate: 5,
    serviceCharge: 10,
  });

  const handleSave = () => {
    setEditing(false);
    toast.success("Changes saved successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const tabs = [
    { id: "restaurant", label: "Restaurant Info" },
    { id: "profile", label: "Profile" },
    { id: "notifications", label: <FaBell className="text-gray-600 dark:text-gray-300 text-xl hover:text-red-600 transition-colors duration-200" /> },
    { id: "payment", label: "Payment" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="flex space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white cursor-pointer"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 cursor-pointer"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mb-4">
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 duration-200"
            >
              Edit
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            {activeTab === "restaurant" && (
              <RestaurantInfo data={restaurantInfo} setData={setRestaurantInfo} editing={editing} />
            )}
            {activeTab === "profile" && (
              <ProfileInfo data={profileInfo} setData={setProfileInfo} editing={editing} />
            )}
            {activeTab === "notifications" && (
              <NotificationsTab data={notifications} setData={setNotifications} editing={editing} />
            )}
            {activeTab === "payment" && (
              <PaymentTab data={payment} setData={setPayment} editing={editing} />
            )}

            {editing && (
              <div className="mt-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 duration-200"
                >
                  Save
                </button>
              </div>
            )}
          </motion.div>
        </main>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
