import "./ModalWithForm.css";
import close_btn from "../../assets/close-btn.svg";
import useModalClose from "../../utils/UseModalClose";

function ModalWithForm({
  children,
  title,
  handleCloseModal,
  isOpen,
  onSubmit,
  loginModal,
  editProfileModal,
}) {
  // console.log("Checking isOpen Prop", isOpen);
  useModalClose(isOpen, handleCloseModal);

  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div
        className={`${
          loginModal || editProfileModal
            ? "modal_login_content"
            : "modal__content"
        }`}
      >
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close"
          onClick={handleCloseModal}
        >
          <img className="button_close" src={close_btn} alt="close button" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          {/* <div className="button__container">
            <button type="submit" className="modal__submit">
              <a className="modal__submit_text">{buttonText}</a>
            </button>
            {secondButtonText?.length > 0 && (
              <button
                type="submit"
                className="modal__submit modal_submit_login"
              >
                <a className="modal__submit_second_text">{secondButtonText}</a>
              </button>
            )}
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
