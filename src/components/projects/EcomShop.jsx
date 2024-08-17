import React from "react";

const EcomShop = ({ demoUrl, image, githubUrl, codeLogo, liveDemo }) => {
  return (
    <div className="project-item">
      <a href={demoUrl}>
        <img className="project-image" src={image} alt="" />
      </a>
      <span>
        {" "}
        The <b>Ecommerce Shop</b> project served as a platform for me to delve
        into best practices in React, gain insight into project structure, and
        familiarize myself with backend development aspects, encompassing a
        comprehensive understanding of it's complexities. <br />
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

export default EcomShop;
