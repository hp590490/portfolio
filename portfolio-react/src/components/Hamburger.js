import React, { useState } from "react";
import Hamburger from "hamburger-react";

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

export default HamburgerComponent;
