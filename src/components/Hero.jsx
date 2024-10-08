import githublogo from "../assets/github-logo.svg";
import profile from "../assets/profile.png";
import javascriptLogo from "../assets/javascript-icon.png";
import reactLogo from "../assets/react-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import javaLogo from "../assets/java-logo.svg";
import springLogo from "../assets/spring-logo.svg";
import flutterLogo from "../assets/flutter-logo.svg";
import dartLogo from "../assets/dart-logo.svg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div id="home" className="main-container">
      <div className="hero-container">
        <div className="text-container">
          <h2>
            Ambitious, Driven, Enthusiastic
          </h2>
          <span className="description">
            Hi, I'm <strong>Marian Kolev</strong>. An aspiring developer from Bulgaria.
          </span>
          <span className="tech-stack">
            <p>| Tech Stack |</p>
            <div>
              <img className="tech-logo" src={javascriptLogo} alt="" />
              <img className="tech-logo-react" src={reactLogo} alt="" />
              <img className="tech-logo" src={htmlLogo} alt="" />
              <img className="tech-logo-css" src={cssLogo} alt="" />
              <img className="tech-logo" src={javaLogo} alt="" />
              <img className="tech-logo-spring" src={springLogo} alt="" />
              <img className="tech-logo" src={flutterLogo} alt="" />
              <img className="tech-logo-dart" src={dartLogo} alt="" />
            </div>
          </span>
          <div className="logo-container">
            <a href="https://github.com/MDKolev">
              <img src={githublogo} alt="github-logo" />
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
