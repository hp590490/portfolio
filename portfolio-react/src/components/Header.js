import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLinks, setShowLinks] = useState(false);

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
  useEffect(() => {
    // applique la classe pour le mode sombre ou clair à l'élément <body>
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const cls = visible ? "visible" : "hidden";

  return (
    <header>
      <nav
        id="navigation"
        className={`${showLinks ? "show-nav" : "hide-nav"} ${cls} ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        {" "}
        <div className="symbols-left">
          <span>&#62;_</span>
        </div>
        <div className="navigation-right">
          <ul
            className={`navbar_links ${
              isDarkMode ? "dark-mode" : "light-mode"
            }`}
          >
            {" "}
            <li className="navbar_item">
              <Link
                to="accueil-content"
                smooth={true}
                duration={500}
                spy={true}
                className="navbar_link"
                onClick={handleShowLinks}
              >
                Accueil
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="projets-content"
                smooth={true}
                duration={600}
                spy={true}
                activeClass="nav-active"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                Mes projets
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="competences-content"
                smooth={true}
                duration={700}
                spy={true}
                activeClass="nav-active"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                Mes compétences
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="about-content"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="nav-active"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                À propos de moi
              </Link>
            </li>
            <li className="navbar_item">
              <Link
                to="contact-content"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="nav-active"
                className="navbar_link"
                onClick={handleShowLinks}
              >
                Contactez-moi !
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className="theme-toggle-btn"
              >
                {isDarkMode ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-regular fa-moon"></i>
                )}
              </button>{" "}
            </li>
          </ul>
          <div className="burger" onClick={handleShowLinks}>
            {" "}
            <button className="navbar-burger">
              <span
                className={`burger-bar ${
                  isDarkMode ? "dark-mode" : "light-mode"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
