import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import ProfilePic from "../images/img.png"; // Replace with your profile image path

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className={`text-white text-xl font-bold ${isMobile ? "hidden" : "block"}`}>
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white mb-2"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-30 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl">
            <FaTimes />
          </button>

          {/* Profile Picture */}
          <img src={ProfilePic} alt="Profile" className="w-24 h-24 rounded-full border-4 border-yellow-500 mb-4" />

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-6 text-white text-lg">
            <li><a href="#home" className="hover:text-yellow-500" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-yellow-500" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" className="hover:text-yellow-500" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" className="hover:text-yellow-500" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-500" onClick={toggleMenu}>Contact</a></li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/Tarun0009" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tarun-pratap-singh-941b91220" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-yellow-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
