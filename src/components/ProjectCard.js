import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project, isFeatured }) => {
  return (
    <StyledWrapper isFeatured={isFeatured}>
      <div className="card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="text">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    height: ${(props) => (props.isFeatured ? "300px" : "250px")};
    width: ${(props) => (props.isFeatured ? "220px" : "180px")};
    background-color: rgb(15, 15, 15);
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    border-radius: 20px;
    box-shadow: 0 0 25px 0px, inset 0 0 80px 0px;
    color: rgb(150, 150, 150);
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
  }

  .project-image {
    width: 80%;
    height: 40%;
    object-fit: cover;
    border-radius: 20px;
    padding: 10px;
  }

  .text {
  font-size: 12px;
    padding: 0px;
  }

  .card:hover {
    box-shadow: 0 0 50px 0px, inset 5px 5px 20px 0px black;
  }

  .card:hover .text {
    scale: 1.1;
    opacity: 0.9;
  }

  @keyframes rot {
    0% {
      transform: rotateX(-15deg) translateY(0px);
    }
    50% {
      transform: rotateX(-15deg) translateY(-10px);
    }
    100% {
      transform: rotateX(-15deg) translateY(0px);
    }
  }
`;

export default ProjectCard;
