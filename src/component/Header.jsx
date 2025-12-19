
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contextcart/context";

export default function Header() {
  const location = useLocation();
  const { totalCartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Hide header on Login & Signup
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/Add" },
    { name: "CheackOut", path: "/CheackOut" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Logout", path: "/login" },
  ];
 
  return (
    <header className="w-full bg-white shadow-md top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/home" className="text-2xl font-bold text-gray-800">
          FakeStore
        </Link>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>

        <nav
          className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 overflow-hidden ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              } flex items-center gap-1 px-4 py-2 md:p-0 relative`}
              onClick={() => setIsOpen(false)}
            >
              {item.name === "Cart" ? (
                <div className="relative flex items-center">
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {totalCartItems}
                    </span>
                  )}
                </div>
              ) : (
                item.name
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


















































