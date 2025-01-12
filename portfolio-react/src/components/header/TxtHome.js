import React from "react";
import Bloc from "../commons/Bloc";
import Coucou from "../../assets/img/coucou.png";

const Accueil = () => {
  return (
    <Bloc title="accueil.txt">
      <div id="accueil-content">
        <div className="center-home">
          <div className="content-top">
            <h3>Bienvenue sur mon portfolio !</h3>
            <img src={Coucou} alt="emoji coucou" />
          </div>
          <div className="content-bot">
            <h2>
              Je <span className="surlignage">suis</span>{" "}
              <span id="underligne1">Hugo PLASTRE</span>
            </h2>
            <h3>
              Développeur <span className="surlignage">front-end junior</span>{" "}
              qui a pour but de <span className="surlignage">travailler</span>{" "}
              dans ce milieu qui me{" "}
              <span className="surlignage">passionne</span> depuis plusieurs
              mois.
            </h3>
          </div>
          <div className="buttons-accueil">
            <button
              onClick={() =>
                (window.location.href = "mailto:hugo.plastre@gmail.com")
              }
              className="btn-email"
            >
              <i className="fa-regular fa-envelope"></i>Me contacter
            </button>
            <button
              onClick={() => window.open("/CV_Hugo.pdf", "_blank")}
              className="btn-cv"
            >
              <i className="fa-solid fa-file"></i> Mon CV
            </button>
          </div>
          <div className="reseaux-accueil">
            <a
              href="https://github.com/hp590490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github">
                <p className="accessibility"></p>
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/hugo-plastre-a68217212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in">
                <p className="accessibility"></p>
              </i>
            </a>
          </div>
          <div className="scroll">
            <p>Scrollez pour découvrir mon travail !</p>
            <span>&#x23F7;</span>
          </div>
        </div>
      </div>
    </Bloc>
  );
};

export default Accueil;
