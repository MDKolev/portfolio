import React from "react";

const Brainwave = ({ demoUrl, image, githubUrl, codeLogo, liveDemo }) => {
  return (
    <div className="project-item">
      <a href={demoUrl}>
        <img className="project-image" src={image} alt="" />
      </a>
      <span>
        {" "}
        The <b>Brainwave</b> project represents a deliberate endeavor on my part
        to delve into contemporary web design layouts, explore advanced
        techniques in web development, and harness the capabilities of Tailwind.{" "}
        <br />
        <div className="project-link-container">
          <a className="project-link-item" href={githubUrl}>
            <img src={codeLogo} alt="" />
          </a>
          <p>Source Code</p>
          <a className="project-link-item" href={demoUrl}>
            <img src={liveDemo} alt="" />
          </a>
          <p>Live Demo</p>
        </div>
      </span>
    </div>
  );
};

export default Brainwave;
