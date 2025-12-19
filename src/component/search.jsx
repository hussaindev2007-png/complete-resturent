

import { FaSearch } from "react-icons/fa";

function Search({ setShowSearch, search, showSearch, setSearch }) {
  return (
    <div className="relative flex items-center">
      
      
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
      >
        <FaSearch className="text-lg" />
      </button>

     
      {showSearch && (
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 px-4 py-2 w-64 rounded-xl bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

         </div>
      )}
    </div>
  );
}

export default Search;

