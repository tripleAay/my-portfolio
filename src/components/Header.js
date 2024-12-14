import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dark mode
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  // Initialize dark mode based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`bg-gray-800 text-white dark:bg-gray-900 transition-all`}>
      <header className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">Shina Adedokun</h1>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-white">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
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
            onClick={handleThemeToggle}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 dark:bg-gray-800 focus:outline-none"
          >
            {darkMode ? "🌙" : "☀️"}
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
