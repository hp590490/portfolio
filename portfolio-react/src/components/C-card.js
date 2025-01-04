import React from "react";
const Ccard = ({ images, title }) => {
  return (
    <div id="cards-container">
      <div id="card">
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
        <div className="back"></div>
      </div>
    </div>
  );
};

export default Ccard;
