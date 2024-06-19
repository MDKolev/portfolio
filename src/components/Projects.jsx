import brainwave from "../assets/brainwave.png";
import ecomShop from "../assets/ecom-shop.png";
import codeLogo from "../assets/code-logo.png";
import liveDemo from "../assets/live-demo.png";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-list">
        <h3>My Projects</h3>
        <div className="project-item">
          <a href="https://react-brainwave.netlify.app/">
            <img className="project-image" src={brainwave} alt="" />
          </a>
          <span>
            {" "}
            The <b>Brainwave</b> project represents a deliberate endeavor on my
            part to delve into contemporary web design layouts, explore advanced
            techniques in web development, and harness the capabilities of
            Tailwind. <br />
            <div className="project-link-container">
              <a className="project-link-item" href="https://github.com/MDKolev/brainwave">
                <img src={codeLogo} alt="" />
              </a>
              <p>Source Code</p>
              <a className="project-link-item" href="https://react-brainwave.netlify.app/">
                <img src={liveDemo} alt="" />
              </a>
              <p>Live Demo</p>
            </div>
          </span>
        </div>
        <div className="project-item">
          <a href="https://ecom-shop-demo.netlify.app/">
            <img className="project-image" src={ecomShop} alt="" />
          </a>
          <span>
            {" "}
            The <b>Ecommerce Shop</b> project served as a platform for me to
            delve into best practices in React, gain insight into project
            structure, and familiarize myself with backend development aspects,
            encompassing a comprehensive understanding of it's complexities.{" "}
            <br />
            <div className="project-link-container">
              <a className="project-link-item" href="https://github.com/MDKolev/digital-shopping">
                <img src={codeLogo} alt="" />
              </a>
              <p>Source Code</p>
              <a className="project-link-item" href="https://ecom-shop-demo.netlify.app/">
                <img src={liveDemo} alt="" />
              </a>
              <p>Live Demo</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
