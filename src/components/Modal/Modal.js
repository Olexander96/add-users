import Button from "../UI/Button";
import "./Modal.css";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.closeModal(false);
  };

  return (
    <div className="modal">
      <div className="backdrop" onClick={ closeModalHandler }></div>
      <div className="modal-widow">
        <div className="top">
          <span>Некоректний ввід</span>
        </div>
        <div className="bottom">
          <span>{props.error}</span>
          <Button type="button" onClick={ closeModalHandler }>
            Закрити
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
