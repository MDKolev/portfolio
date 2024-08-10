import React from "react";

const Jsonplaceholder = ({ demoUrl, image, githubUrl, codeLogo, liveDemo }) => {
  return (
    <div className="project-item">
      <a href={demoUrl}>
        <img className="project-image" src={image} alt="" />
      </a>
      <span>
        {" "}
        The <b>JSONPlaceholder API</b> project utilizes an API, fetches data and
        displays it in a user-friendly format. The data can be sorted in
        ascending or descending order and it can be selected to be shown by 1, 3
        or 5 user data per page. <br />
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

export default Jsonplaceholder;
