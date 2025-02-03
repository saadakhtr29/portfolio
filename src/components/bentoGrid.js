import React from "react";
import ProjectCard1 from "./ProjectCards/ProjectCard1";
import ProjectCard2 from "./ProjectCards/ProjectCard2";
import ProjectCard3 from "./ProjectCards/ProjectCard3";
import BlogCard from "./BlogCard";
import Button from "./Socials";
import "./BentoGrid.css";

function BentoGrid() {
  return (
    <div className="bento-grid">
      <div className="grid item-1">
        <h2 className="stackHeading">Tech Stack</h2>
      </div>

      <div className="grid item-2">
        <div className="about-container">
          <h2 className="aboutHeading">About</h2>
          <img className="aboutGif" src="../assets/About.gif" alt="About-img" />
        </div>
      </div>

      <div className="grid item-3">
       <div className="socials-container">
       <h2 className="socialsHeading">Connect with Me</h2>
       <Button />
       </div>
      </div>

      <div className="grid item-4 content-column">
        <h2 className="blogHeading">Blogs</h2>
        <div className="cards-container">
          <BlogCard />
        </div>
      </div>

      <div className="grid item-5 content-column">
        <h2 className="projectHeading">Projects</h2>
        <div className="cards-container">
          <ProjectCard1 />
          <ProjectCard2 />
          <ProjectCard3 />
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
