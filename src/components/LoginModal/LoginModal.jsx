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
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      <label className="modal__label modal_label_login">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label className="modal__label modal_label_login">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
        />
      </label>
    </ModalWithForm>
  );
}
