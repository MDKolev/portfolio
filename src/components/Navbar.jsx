import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
 

  return (
    <nav id="navbar" className="nav">
      <ul>
        <li>
        <Link to="home" smooth={true} offset={-120} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about-me" smooth={true} offset={-270} duration={500}>About Me</Link>
        </li>
        <li>
        <Link to="projects" smooth={true} offset={-40} duration={500}>Projects</Link>
        </li>
        <li>
        <Link to="contact" smooth={true} offset={-150} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
