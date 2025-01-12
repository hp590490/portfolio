import React, { useState, useEffect } from "react";
import ModalButton from "./ModalButton";
import PropTypes from "prop-types";

const Card = ({ activeFilter }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await fetch("/projets.json");
        const projets = await response.json();
        setData(projets);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProjets();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const filteredData = activeFilter
    ? activeFilter === "CSS/SASS"
      ? data.filter(
          (projet) => projet.langage === "CSS" || projet.langage === "SASS"
        )
      : data.filter((projet) => projet.langage === activeFilter)
    : data;

  return (
    <div className="cards-container">
      {filteredData.map((projet) => (
        <div className="card" key={projet.id}>
          <img src={projet.cover} alt={`projet ${projet.title}`} />
          <div className="card-txt">
            <h3>{projet.title}</h3>
            <div className="tags">
              <p>{projet.langage}</p>
            </div>
            <div className="modal-part">
              <ModalButton id={projet.id} data={data} />
              <span>&#x23F5;</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Card.propTypes = {
  activeFilter: PropTypes.string,
};
export default Card;
