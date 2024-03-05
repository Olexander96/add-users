import ReactDom from "react-dom";
import Button from "../UI/Button";
import "./Modal.css";
import React from "react";

const ModalContent = (props) => {
  const closeModalHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className="modal">
      <div className="backdrop" onClick={closeModalHandler}></div>
      <div className="modal-widow">
        <div className="top">
          <span>Некоректний ввід</span>
        </div>
        <div className="bottom">
          <span>{props.error}</span>
          <Button type="button" onClick={closeModalHandler}>
            Закрити
          </Button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalContent closeModal={props.closeModal} error={props.error} />,
        document.getElementById("modal-wrapper")
      )}
    </React.Fragment>
  );
};

export default Modal;
