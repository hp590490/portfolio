import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "visible" : "hidden";

  return (
    <nav id="navigation" className={cls}>
      <div className="symbols-left">
        <span>&#62;_</span>
      </div>
      <div className="navigation-right">
        <ul>
          <li>
            <Link to="accueil-content" smooth={true} duration={500} spy={true}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="projets-content"
              smooth={true}
              duration={600}
              spy={true}
              activeClass="nav-active"
            >
              Mes projets
            </Link>
          </li>
          <li>
            <Link
              to="competences-content"
              smooth={true}
              duration={600}
              spy={true}
              activeClass="nav-active"
            >
              Mes compétences
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              activeClass="nav-active"
            >
              À propos de moi
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              activeClass="nav-active"
            >
              Contactez-moi !
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
