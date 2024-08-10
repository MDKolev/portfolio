import brainwave from "../assets/brainwave.png";
import ecomShop from "../assets/ecom-shop.png";
import codeLogo from "../assets/code-logo.png";
import liveDemo from "../assets/live-demo.png";
import "../styles/projects.css";
import Brainwave from "./projects/Brainwave";
import EcomShop from "./projects/EcomShop";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-list">
        <h3>My Projects</h3>
        <div className="project-item">
          <Brainwave
            demoUrl={`https://react-brainwave.netlify.app/`}
            image={brainwave}
            githubUrl={`https://github.com/MDKolev/brainwave`}
            codeLogo={codeLogo}
            liveDemo={liveDemo}
          />
        </div>

        <div className="project-item">
          <EcomShop
            demoUrl={`https://ecom-shop-demo.netlify.app/`}
            image={ecomShop}
            githubUrl={`https://github.com/MDKolev/digital-shopping`}
            codeLogo={codeLogo}
            liveDemo={liveDemo}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
