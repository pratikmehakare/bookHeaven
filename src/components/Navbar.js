import React from "react";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="bg-gray-800 ">
      <nav className="container mx-auto px-4 py-6 w-10/12 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <NavLink to="/" className="text-white text-3xl font-bold">
          <span className="text-blue-500">B</span><span className="text-blue-400">o</span><span className="text-blue-300">o</span><span className="text-blue-200">k</span><span className="text-green-500">H</span><span className="text-green-400">e</span><span className="text-green-300">a</span><span className="text-green-200">v</span><span className="text-green-100">e</span><span className="text-red-100">n</span>
        </NavLink>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <ul className="flex text-lg text-white">
            <li className="inline-block py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
              <NavLink to="/" activeClassName="font-bold">
                Home
              </NavLink>
            </li>
            <li className="inline-block py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
              <NavLink to="/about" activeClassName="font-bold">
                About
              </NavLink>
            </li>
            <li className="inline-block py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
              <NavLink to="/service" activeClassName="font-bold">
                Service
              </NavLink>
            </li>
            <li className="inline-block py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
              <NavLink to="/contact" activeClassName="font-bold">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="relative">
            <NavLink to="/cart">
              <IoCart className="text-white text-2xl" />
            
            {cart.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
              >
                {cart.length}
              </span>
              
            )}
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
