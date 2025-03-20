import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-gray-100 text-gray-800 overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-400 to-black text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey there! I’m <span className="font-semibold text-blue-600">Tarun Pratap Singh</span>—a tech enthusiast, a problem solver, and a developer with a knack for turning ideas into functional apps.
          From building responsive websites to crafting efficient mobile apps, I strive to create experiences that users love.
          <br />
          <br />
          I specialize in technologies like{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
            React.js, React Native, Tailwind CSS, and Java
          </span>, but I’m always open to diving into new frameworks and tools. My ultimate goal? To keep learning and growing while contributing to meaningful projects.
          <br />
          <br />
          I have completed my graduation in <span className="font-semibold text-blue-600">Bachelor of Technology (B.Tech) in Computer Science and Engineering</span> in 2024.
          <br />
          <br />
          Outside of tech, I enjoy sports, gaming, and exploring new innovations. Let’s build something amazing together!
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="https://www.linkedin.com/in/tarun-pratap-singh-941b91220/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 text-sm sm:text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </section>
  );
};

export default About;
