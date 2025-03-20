import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import Squares from "./Squares"; // Import Squares background animation
import ProfilePic from "../images/img.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center relative text-white pt-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Squares Background Animation */}
      <div className="absolute inset-0 -z-10">
        <Squares direction="diagonal" speed={0.5} borderColor="#555" hoverFillColor="#0f0" />
      </div>

      {/* Content Wrapper - Slightly Smaller for Compact View */}
      <div className="relative flex flex-col items-center text-center gap-5 bg-black/10 backdrop-blur-2xl rounded-xl p-6 md:p-10 shadow-xl border border-white/30 w-full max-w-lg sm:max-w-xl md:max-w-3xl">

        {/* Profile Image - Centered */}
        <motion.img
          src= {ProfilePic}
          alt="Tarun Pratap Singh"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full border-6 border-blue-500 shadow-xl object-cover p-2 bg-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_#7dd3fc]">
          Hello, I'm Tarun Pratap Singh
        </h1>

        {/* Typing Effect */}
        <p className="text-sm sm:text-md md:text-xl">
          <ReactTyped
            strings={[
              "WEB DEVELOPER | JAVA DEVELOPER.",
              "I create user-friendly web applications and Mobile applications.",
              "I love coding and problem-solving."
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </p>

        {/* Call to Action Button */}
        <motion.a
          href="projects"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold 
          hover:bg-blue-400 hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 shadow-lg"
        >
          Explore my Work
        </motion.a>

        {/* Social Links - Adjusted Spacing */}
        <div className="flex gap-5 justify-center mt-3">
          <motion.a
            href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            href="https://github.com/Tarun0009"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="mailto:tarunpratapsingh097@gmail.com"
            className="text-white text-2xl hover:text-red-400 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
