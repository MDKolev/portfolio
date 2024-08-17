import React from "react";
import html from "../../assets/html-logo.svg";
import css from "../../assets/css-logo.svg";
import tailwind from "../../assets/tailwind-logo.png";

const Brainwave = ({ demoUrl, image, githubUrl, codeLogo, liveDemo }) => {
  return (
    <div className="project-item">
      <a href={demoUrl}>
        <img className="project-image" src={image} alt="" />
      </a>
      <div className="tech-used">
        <img src={html} alt="" />
        <img src={css} alt="" />
        {/* <img src={tailwind} alt="" /> */}
        <img src={tailwind} alt="" />
      </div>
      <span>
        {" "}
        The <b>Brainwave</b> project represents a deliberate endeavor on my part
        to delve into contemporary web design layouts, explore advanced
        techniques in web development, and harness the capabilities of Tailwind.{" "}
        <br />
      </span>

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
    </div>
  );
};

export default Brainwave;
