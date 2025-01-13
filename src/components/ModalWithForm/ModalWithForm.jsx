import "./ModalWithForm.css";
import close_btn from "../../assets/close-btn.svg";

function ModalWithForm({ children, buttonText, title }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close">
          <img className="button_close" src={close_btn} alt="close button" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            <a className="modal__submit_text">{buttonText}</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
