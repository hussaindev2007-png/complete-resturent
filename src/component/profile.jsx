import { useState } from "react";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const FollowerCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
     <div className="flex-1 flex flex-col">
       <Navbar />
          <div className="flex-1 flex justify-center items-center">
           <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-80 bg-white shadow-lg rounded-xl overflow-hidden relative"
          >
          <div className="h-24 bg-neutral-300"></div>
           <img
              src="https://res.cloudinary.com/saylani-welfare/image/upload/v1762073154/SMIT/Students/4240166173265.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
            />
               <div className="p-6 mt-14 text-center">
              <h2 className="text-2xl font-bold text-black">Hussain Ali</h2>
              <p className="text-gray-600">Frontend Developer</p>
              <p className="text-gray-500">Hussaindev2007@gmail.com</p>

              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`mt-4 px-6 py-2 rounded-lg text-white duration-200 ${
                  isFollowing ? "bg-green-600" : "bg-blue-600"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>

              <div className="flex justify-around mt-6 text-sm">
                <div>
                  <strong className="text-lg text-black">3.2M</strong>
                  <p className="text-gray-600">Followers</p>
                </div>
                <div>
                  <strong className="text-lg text-black">300k</strong>
                  <p className="text-gray-600">Following</p>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
      </div>
    </div>
  );
};

export default FollowerCard;
