import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectPage.css";

export const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A MERN-based system for efficient hospital operations.",
    link: "https://github.com/saadakhtr29/Hospital-Management-System",
    image: "hospital.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek, animated personal portfolio.",
    link: "",
    image: "portfolio.jpg",
  },
  {
    id: 3,
    title: "E-commerce platform",
    description: "A fullstack e-commerce platform (Coming soon)",
    link: "",
    image: "",
  },
  {
    id: 4,
    title: "Memory-Card Game",
    description: "A progressive web Memory-Card Game App",
    link: "https://github.com/saadakhtr29/Memory-card-Game",
    image: "./assets/Memory-game.png",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A real-time progressive web Weather app",
    link: "https://github.com/saadakhtr29/Weather-App",
    image: "./assets/Weather-app.png",
  },
  {
    id: 6,
    title: "To-do List App",
    description: "A progresssive web To-do list app",
    link: "https://github.com/saadakhtr29/To-do-list-App",
    image: "",
  },
  {
    id: 7,
    title: "Quiz App",
    description: "A simple progressive web Quiz app",
    link: "#",
    image: "hospital.jpg",
  },
  {
    id: 8,
    title: "Abaya website",
    description: "A modern e-commerce Abaya Website.",
    link: "https://github.com/saadakhtr29/Abaya-Website",
    image: "",
  },
  {
    id: 9,
    title: "Flipkart Clone",
    description: "A simple e-commerce clone",
    link: "https://github.com/saadakhtr29/Flipkart-Clone",
    image: "",
  },
];

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h2 className="projectPageHeading">All Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
