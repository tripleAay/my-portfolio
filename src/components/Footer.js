import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Personal Branding */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="text-sm md:text-md font-medium">
            Designed & Built by{" "}
            <span className="text-yellow-500 font-semibold">
              Shina Adedokun
            </span>
            © {new Date().getFullYear()}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/tripleaay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition duration-300"
          >
            {/* LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.33 4.3 5 3.5 5S2 4.33 2 3.5 2.67 2 3.5 2 4.98 2.67 4.98 3.5zM2 8h3v12H2V8zm6.5 0h2.8v1.6h.04c.4-.7 1.3-1.6 2.7-1.6 2.9 0 3.4 1.9 3.4 4.4V20h-3v-6c0-1.4 0-3.2-2-3.2-2.1 0-2.4 1.5-2.4 3V20h-3V8z" />
            </svg>
          </a>
          <a
            href="https://github.com/tripleAay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition duration-300"
          >
            {/* GitHub */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.6.5.5 5.6.5 12a11.5 11.5 0 008 11c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.5-4-1.5-.6-1.6-1.4-2-1.4-2-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 2.6.1 3.2-.1v-2.2c-2.5-.3-5-1.2-5-5.5a4.2 4.2 0 011.1-3 3.8 3.8 0 01.1-3s1-.2 3.3 1.2a11.1 11.1 0 016 0C16.8 4.5 18 4.7 18 4.7a3.7 3.7 0 01.1 3 4.2 4.2 0 011.1 3c0 4.3-2.5 5.2-5 5.5v2.2c.6.2 2.2.2 3.2.1 0 0 .6 0 1.8-1.2 0 0 1.2-.1.1.8 0 0-.8.4-1.4 2 0 0-.6 2.2-4 1.5v2.3c0 .4.2.8.8.6a11.5 11.5 0 008-11C23.5 5.6 18.4.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
