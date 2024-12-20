import React from "react";
import PropTypes from "prop-types";

const Bloc = ({ title, children }) => {
  return (
    <div className="bloc">
      <div className="txt-title">
        <div className="txt-title-left">
          <p>{title}</p>
        </div>
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="bloc-content">{children}</div>
    </div>
  );
};

Bloc.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Bloc;
