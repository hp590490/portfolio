import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import PropTypes from "prop-types";

const ModalButton = ({ id, data }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      // désactiver le scroll
      document.body.style.overflow = "hidden";
    } else {
      // réactiver le scroll
      document.body.style.overflow = "auto";
    }

    // nettoyage lors du démontage
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Clique ici pour en savoir plus !
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            closeModal={() => setShowModal(false)}
            id={id}
            data={data}
          />,
          document.body
        )}
    </>
  );
};
ModalButton.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default ModalButton;
