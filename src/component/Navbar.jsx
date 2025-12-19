
import { FaBell, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
      <h1 className="text-gray-900 dark:text-white font-bold">Welcome, Admin</h1>
      <div className="flex items-center space-x-4">
       
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="cursor-pointer"
        >
           <Link to= "/setting">
           
          <FaBell className="text-gray-600 dark:text-gray-300 text-xl" />
           </Link>
        </motion.div>
<Link to= "/profile">

        
        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          <FaUserCircle className="text-gray-600 dark:text-gray-300 text-2xl" />
        </motion.div>
</Link>
      </div>
    </header>
  );
};

export default Navbar;
