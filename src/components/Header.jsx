import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 bg-gradient-to-r from-blue-500 to-indigo-500">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <img src={Logo} className="h-8 w-8" alt="" />
          <span><Link to="/">SaleSprint</Link></span>
        </div>
        <ul className="flex space-x-4">
          <li className="font-semibold"><Link to="/features" className="hover:underline">Features</Link></li>
          <li className="font-semibold"><Link to="/landing" className="hover:underline">Landing</Link></li>
          <li className="font-semibold"><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li className="font-semibold"><Link to="/about" className="hover:underline">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;