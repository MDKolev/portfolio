import React from "react";
import "../styles/projectCard.css"; // We'll add some CSS later

const ProjectCard = ({ demoUrl, image, githubUrl, codeLogo, liveDemo }) => {
  return (
    <div className="project-card">
      <img src={image} alt="Project Screenshot" className="project-image" />
      <div className="project-info">
        <div className="project-links">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <img src={liveDemo} alt="Live Demo" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={codeLogo} alt="GitHub Repo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
