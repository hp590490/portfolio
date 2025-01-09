import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Bloc from "./Bloc";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hugo.plastre@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Réinitialise après 2 secondes
    });
  };
  return (
    <div id="contact-content">
      <h2>Contactez-moi !</h2>
      <div className="blocs-contact">
        <Bloc title="contact.jsx" className="form-bloc">
          <ContactForm />
        </Bloc>
        <Bloc title="coordonnées.scss" className="coordonnées-bloc">
          <div className="coordonnées-content">
            <div className="top-coordo">
              <h3 onClick={handleCopy} style={{ cursor: "pointer" }}>
                <i className="fa-regular fa-envelope"></i>
                hugo.plastre@gmail.com
                {copied && <span className="spanmail">Copié !</span>}
              </h3>
              <h3>
                <i className="fa-solid fa-phone"></i>06 04 46 61 14
              </h3>
              <h3>
                <i className="fa-solid fa-location-dot"></i>Région parisienne,
                France
              </h3>
            </div>
            <div className="middle-coordo">
              <h3 className="link-github">
                <a
                  href="https://github.com/hp590490"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  https://github.com/hp590490
                </a>
              </h3>

              <h3 className="link-linkedin">
                <a
                  href="https://www.linkedin.com/in/hugo-plastre-a68217212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                  https://www.linkedin.com/in/hugo-plastre-a68217212/
                </a>
              </h3>
            </div>
            <div className="bottom-coordo">
              <p>
                <span></span> Disponible pour toute opportunité !
              </p>
            </div>
          </div>
        </Bloc>
      </div>
    </div>
  );
};

export default Contact;
