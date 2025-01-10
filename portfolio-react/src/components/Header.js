import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
  const cls = visible ? "visible" : "hidden";

  return (
    <header>
      <nav
        id="navigation"
        className={`${cls} ${isDarkMode ? "dark-mode" : "light-mode"}`}
      >
        {" "}
        <div className="symbols-left">
          <span>&#62;_</span>
        </div>
        <div className="navigation-right">
          <ul>
            <li>
              <Link
                to="accueil-content"
                smooth={true}
                duration={500}
                spy={true}
              >
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
                duration={700}
                spy={true}
                activeClass="nav-active"
              >
                Mes compétences
              </Link>
            </li>
            <li>
              <Link
                to="about-content"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="nav-active"
              >
                À propos de moi
              </Link>
            </li>
            <li>
              <Link
                to="contact-content"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="nav-active"
              >
                Contactez-moi !
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle-btn">
                {isDarkMode ? (
                  <i class="fa-solid fa-sun"></i>
                ) : (
                  <i class="fa-regular fa-moon"></i>
                )}
              </button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
