import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../images/portfolio.png";
import classTrackerImg from "../images/classTracker.png";
import passGenImg from "../images/passGen.png";
import shpSphereImg from "../images/shpsphere.png";

// Project Data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.js and Tailwind CSS to showcase my skills and projects.",
    link: "https://your-portfolio.com",
    image: portfolioImg,
    tech: "React.js, Tailwind CSS",
  },
  {
    title: "Class Tracker",
    description: "A system for managing student attendance, enabling institutions to efficiently track attendance while providing a user-friendly interface.",
    link: "https://tarun0009.github.io/ClassTracker/",
    image: classTrackerImg,
    tech: "React, Node.js",
  },
  {
    title: "Password Generator",
    description: "A responsive web app that generates secure passwords with customizable options. Includes copy-to-clipboard functionality.",
    link: "https://tarun0009.github.io/Password-Generator/",
    image: passGenImg,
    tech: "JavaScript, HTML, CSS",
  },
  {
    title: "ShopSphere - E-commerce Website",
    description: "A modern and responsive e-commerce platform built with React.js and Tailwind CSS, providing a seamless shopping experience.",
    link: "https://tarun0009.github.io/shopsphere/",
    image: shpSphereImg,
    tech: "React.js, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Explore some of my recent projects showcasing my skills in web and software development.
        </p>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative border rounded-lg p-4 bg-white shadow-md backdrop-blur-md transition-transform transform hover:scale-105 hover:shadow-lg w-80 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Project Image with Skeleton Loader */}
              <ImageWithSkeleton src={project.image} alt={project.title} />

              {/* Project Content */}
              <h3 className="text-lg font-semibold text-gray-800 mt-3">{project.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{project.description}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.split(", ").map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-3">
                <a
                  href={project.link}
                  className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo 
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 🖼 Image Component with Skeleton Loader */
const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-32 relative bg-gray-300 rounded-lg overflow-hidden">
      {/* Skeleton Loader */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gray-400"></div>}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-32 object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default Projects;
