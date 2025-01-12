import React, { useState } from "react";
import Hamburger from "hamburger-react";
import PropTypes from "prop-types";

const HamburgerComponent = ({ toggleMenu }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    toggleMenu(!open);
  };

  return (
    <div className="hamburger">
      <Hamburger size={18} toggled={open} toggle={handleClick} />
    </div>
  );
};

HamburgerComponent.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
export default HamburgerComponent;
