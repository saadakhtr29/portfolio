import React from "react";
import { motion } from "framer-motion";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";
import "./ProjectCarousel.css";

const projects = [<ProjectCard1 />, <ProjectCard2 />, <ProjectCard3 />];

const ProjectCarousel = () => {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div key={index} className="carousel-item">
            {project}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectCarousel;
