import "./Modal.css";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-widow">
        <div className="top">
          <span>Некоректний ввід</span>
        </div>
        <div className="bottom">
          <span>{props.error}</span>
          <button type="button" onClick={closeModalHandler}>
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
