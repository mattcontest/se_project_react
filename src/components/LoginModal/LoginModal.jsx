import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import "./LoginModal.css";

export default function LoginModal({
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  isOpen,
  onSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      loginModal={true}
    >
      <label htmlFor="email" className="modal__label modal_label_login">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="password" className="modal__label modal_label_login">
        Password{""}
        <input
          type="password"
          className="modal__input"
          value={password}
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>
      <div className="button__container">
        <button
          type="submit"
          className="modal__login_btn"
          onClick={handleLoginSubmit}
        >
          <a className="modal__submit_text">{buttonText}</a>
        </button>

        <button
          type="submit"
          className="modal__signup_btn"
          onClick={handleLoginSubmit}
        >
          <a className="modal__login_text">or Sign Up</a>
        </button>
      </div>
    </ModalWithForm>
  );
}
