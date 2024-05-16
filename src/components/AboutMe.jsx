import codeImage from "../assets/coding-pic.jpg";
import "../styles/aboutme.css";

const AboutMe = () => {
  return (
    <div id="about-me" className="container">
      <div className="items-container">
        <img src={codeImage} alt="" />
        <div className="about-me-description">
          <h3>About Me</h3>
          <span>
            I'm a  <b>highly ambitious</b>, <b>disciplined</b> and <b>hard-working</b> individual who has no
            practical experience as a developer, yet study and practice every
            day. Currently, I'm studying JavaScript and working on solving
            coding challenges and understanding how to implement different
            features in my projects. I'm eager to start working in the IT
            sector, so I can expand my knowledge and even teach people one day.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
