import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import ProfilePic from "../images/img.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition">
          Tarun Pratap Singh
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg transition-all duration-300">
          <img src={ProfilePic} alt="Profile" className="w-24 h-24 rounded-full border-4 border-yellow-500 mb-4" />

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={toggleMenu}
              className="hover:text-yellow-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <div className="flex space-x-6 pt-4">
            <a
              href="https://github.com/Tarun0009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-400 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/tarun-pratap-singh-941b91220"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-400 transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
