import React from "react";
import brainwave from "../assets/brainwave.png";
import ecomShop from "../assets/ecom-shop.png";
import codeLogo from "../assets/code-logo.png";
import liveDemo from "../assets/live-demo.png";
import JsonplaceholderImage from "../assets/jsonplaceholder-api.png";
import expenseTracker from "../assets/expense-tracker.png";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
  const projects = [
    {
      demoUrl: "https://online-web-expense-tracker.netlify.app/",
      image: expenseTracker,
      githubUrl: "https://github.com/MDKolev/expense-tracker",
      codeLogo: codeLogo,
      liveDemo: liveDemo,
    },
    {
      demoUrl: "https://react-brainwave.netlify.app/",
      image: brainwave,
      githubUrl: "https://github.com/MDKolev/brainwave",
      codeLogo: codeLogo,
      liveDemo: liveDemo,
    },
    {
      demoUrl: "https://ecom-shop-demo.netlify.app/",
      image: ecomShop,
      githubUrl: "https://github.com/MDKolev/digital-shopping",
      codeLogo: codeLogo,
      liveDemo: liveDemo,
    },
    {
      demoUrl: "https://jsonplaceholder-api.netlify.app/",
      image: JsonplaceholderImage,
      githubUrl: "https://github.com/MDKolev/jsonplaceholder-api",
      codeLogo: codeLogo,
      liveDemo: liveDemo,
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h3>My Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            demoUrl={project.demoUrl}
            image={project.image}
            githubUrl={project.githubUrl}
            codeLogo={project.codeLogo}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
