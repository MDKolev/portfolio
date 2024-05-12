import githublogo from "../assets/githublogo.svg";
import linkedinlogo from "../assets/linkedinlogo.svg";
import profile from "../assets/profile.png";
import javascriptLogo from "../assets/javascript-icon.png";
import reactLogo from "../assets/react-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import javaLogo from "../assets/java-logo.svg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="mass-container">
      <div className="hero-container">
        <div className="text-container">
          <h2>
            Dummy text representing<br></br> what i apply for
          </h2>
          <span className="description">
            Hi, I'm Marian Kolev. A self-taught developer based in Plovdiv,
            Bulgaria.
          </span>
          <span className="tech-stack">
            Tech Stack |
            <img src={javascriptLogo} alt="" />
            <img src={reactLogo} alt="" />
            <img src={htmlLogo} alt="" />
            <img src={cssLogo} alt="" />
            <img src={javaLogo} alt="" />
          </span>
          <div className="logo-container">
            <a href="https://github.com/MDKolev">
              <img src={githublogo} alt="github-logo" />
            </a>
            <a href="">
              <img src={linkedinlogo} alt="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <img src={profile} alt="profile-image" className="profile-image" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
