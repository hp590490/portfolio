import React, { useState } from "react";
import PropTypes from "prop-types";

const Ccard = ({ images, title, competences }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="cards-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div id="card" className={isHovered ? "hovered" : ""}>
        <div className="front">
          <div className="front-img">
            {images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={` ${index + 1}`} />
            ))}
          </div>
          <div className="front-txt">
            <h4>{title}</h4>
            <p>Et si tu survolais la carte ?</p>
          </div>
        </div>
        <div className="back">
          <h4>{title}</h4>

          <ul>
            {competences.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
Ccard.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  competences: PropTypes.array.isRequired,
};
export default Ccard;
