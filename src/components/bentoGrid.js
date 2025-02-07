import React from "react";
import BlogCard from "./BlogCard";
import ProgressSkills from "./SkillsProgress";
import ProjectCard from "./ProjectCard";
import Button from "./Socials";
import "./BentoGrid.css";
import { projects } from "./ProjectPage"; // Import project data

function BentoGrid() {
  const recentProjects = projects.slice(0, 3); // ✅ Get the 3 most recent projects

  return (
    <div className="bento-grid">
      {/* Skills Section */}
      <div className="grid item-1">
        <div className="techStack-container">
          <h2 className="techStackHeading">My Skills</h2>
          <ProgressSkills />
        </div>
      </div>

      {/* About Section */}
      <div className="grid item-2">
        <div className="about-container">
          <div className="about-text">
            <h2 className="aboutHeading">About</h2>
            <p className="aboutContent">
              I'm a web developer, graphic designer, and content-writer with a
              passion for crafting seamless digital experiences. Proficient in
              the MERN stack, I build intuitive, high-performance applications
              with a keen eye for design and functionality.<br/><br/> Fueled by caffeine
              and creativity, I thrive on solving complex problems—because
              debugging at 3 AM is just a puzzle with higher stakes! Whether
              it's designing sleek interfaces or developing scalable web
              solutions, I bring ideas to life with clean, efficient code.
            </p>
          </div>
          <img className="aboutGif" src="../assets/About.gif" alt="About" />
        </div>
      </div>

      {/* Socials Section */}
      <div className="grid item-3">
        <div className="socials-container">
          <h2 className="socialsHeading">Connect with Me</h2>
          <Button />
        </div>
      </div>

      {/* Blogs Section */}
      <div className="grid item-4 content-column">
        <h2 className="blogHeading">Latest Blogs</h2>
        <div className="cards-container">
          <BlogCard />
        </div>
      </div>

      {/* Top 3 Projects Section */}
      <div className="grid item-5 content-column">
        <h2 className="projectHeading">Recent Work</h2>
        <div className="cards-container">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
