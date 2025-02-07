import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectPage.css";

export const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A MERN-based system for efficient hospital operations.",
    link: "#",
    image: "hospital.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek, animated personal portfolio.",
    link: "#",
    image: "portfolio.jpg",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "A modern full-stack e-commerce platform.",
    link: "#",
    image: "ecommerce.jpg",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A real-time social media analytics tool.",
    link: "#",
    image: "social.jpg",
  },
  {
    id: 5,
    title: "AI Chatbot",
    description: "A conversational AI chatbot for customer support.",
    link: "#",
    image: "chatbot.jpg",
  },
  {
    id: 1,
    title: "Hospital Management System",
    description: "A MERN-based system for efficient hospital operations.",
    link: "#",
    image: "hospital.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek, animated personal portfolio.",
    link: "#",
    image: "portfolio.jpg",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "A modern full-stack e-commerce platform.",
    link: "#",
    image: "ecommerce.jpg",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A real-time social media analytics tool.",
    link: "#",
    image: "social.jpg",
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
