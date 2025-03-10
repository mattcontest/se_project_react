import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

export default function LoginModal({
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  isOpen,
  onSubmit,
  handleSignupSubmitInstead,
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

  const handleSignupInstead = () => {
    handleSignupSubmitInstead();
  };

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      loginModal={true}
      onSubmit={handleLoginSubmit}
    >
      <label htmlFor="login_email" className="modal__label modal_label_login">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login_email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="login_password"
        className="modal__label modal_label_login"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          value={password}
          id="login_password"
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </label>
      <div className="button__container">
        <button type="submit" className="modal__login_btn">
          {buttonText}
        </button>

        <button
          type="button"
          className="modal__signup_btn modal__login_text"
          onClick={handleSignupInstead}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}
