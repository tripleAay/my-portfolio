import React, { useState, useEffect, useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import ContactForm from "../components/ContactForm"



const Header = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {lightMode, toggleTheme} = useContext(ThemeContext);

  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
  className={`transition-all duration-300 ease-in-out ${
    lightMode
      ? "bg-gray-800 text-white shadow-lg"
      : "bg-[#FFFBFC] text-gray-800 shadow-md"
  }`}
>

      <header className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className={`text-xl font-bold ${lightMode?"":"text-yellow-400"}`}>Shina Adedokun</h1>

        {/* Navigation Links (Desktop) */}
        <nav className={` hidden md:flex space-x-6 `} >
          <a href="#about" className={`transition-all ${lightMode? "text-gray-300 hover:text-white":"text-gray-800 "} `}>
            About
          </a>
          <a href="#portfolio" className={`transition-all ${lightMode? "text-gray-300 hover:text-white":"text-gray-800 "} `}> 
            Portfolio
          </a>
          <a href="#contact" className={`transition-all ${lightMode? "text-gray-300 hover:text-white":"text-gray-800 "} `}>
            Contact
          </a>
        </nav>

        {/* Search and Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-gray-300 rounded-full pl-4 pr-10 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </button>
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 dark:bg-gray-800 focus:outline-none"
          >
            {lightMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-700 text-white`}
      >
        <a
          href="#about"
          className="block py-2 px-4 hover:bg-gray-600 transition-colors"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="block py-2 px-4 hover:bg-gray-600 transition-colors"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:bg-gray-600 transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
