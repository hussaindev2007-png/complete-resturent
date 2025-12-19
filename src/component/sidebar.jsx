import { FaHome, FaUtensils, FaShoppingCart, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      
      
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Restaurant
      </div>

    
      <nav className="flex-1 p-4">

       
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaHome className="mr-2" /> Dashboard
        </NavLink>

     
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" /> Profile
        </NavLink>

       
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaShoppingCart className="mr-2" /> Orders
        </NavLink>

     
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUtensils className="mr-2" /> Menu
        </NavLink>

       
        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaCalendarAlt className="mr-2" /> Reservations
        </NavLink>

      
        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" /> Customers
        </NavLink>

         <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center mb-4 p-2 rounded duration-200 ${
              isActive ? "text-green-600" : "hover:bg-gray-700"
            }`
          }
        >
          <FaUsers className="mr-2" />Setting
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
