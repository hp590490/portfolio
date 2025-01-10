import React, { useEffect, useState } from "react";
import Caroussel from "./Caroussel";

const ModalContent = ({ closeModal, id, data }) => {
  const [projet, setProjet] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    // trouver le projet correspondant à l'id
    const selectedProject = data.find((proj) => proj.id === String(id));
    setProjet(selectedProject);

    // une fois le projet trouvé, afficher la modale avec un léger délai
    const timer = setTimeout(() => {
      setModalVisible(true); // déclenche l'animation d'affichage
    }, 50);

    return () => clearTimeout(timer);
  }, [id, data]);

  // fonction pour fermer la modale avec animation inverse
  const handleClose = () => {
    setModalVisible(false); // d'abord on cache la modale
    setTimeout(closeModal, 300); // fermer réellement la modale après la durée de l'animation
  };

  if (!projet) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <div onClick={handleClose} className="modal-overlay"></div>
      <div
        className={`modal-content ${modalVisible ? "show" : ""} ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <h2>{projet.title}</h2>
        <Caroussel pictures={projet.pictures} />
        {projet.description.map((item, index) => (
          <ul className="itemDescription" key={index}>
            <li>{item}</li>
          </ul>
        ))}
        <div className="repo">
          <a href={projet.repo} target="_blank" rel="noopener noreferrer">
            Repository GitHub
          </a>
        </div>

        <button onClick={handleClose} className="closebtn">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
    </>
  );
};

export default ModalContent;
