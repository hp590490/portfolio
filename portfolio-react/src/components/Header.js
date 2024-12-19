import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="navigation">
      <div className="symbols-left">
        <span>&#62;_</span>
      </div>
      <div className="navigation-right">
        <ul>
          <li>
            <Link
              to="navigation"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="nav-active"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="projets"
              smooth={true}
              duration={500}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Mes projets
            </Link>
          </li>
          <li>
            <Link
              to="compétences"
              smooth={true}
              duration={500}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Mes compétences
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              À propos de moi
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Contactez-moi !
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
