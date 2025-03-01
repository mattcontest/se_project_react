import "./RegistrationModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function RegistrationModal({
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  isOpen,
  onSignupSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
      onSubmit={onSignupSubmit}
    >
      <label htmlFor="email" className="modal__label modal_label_registration">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label
        htmlFor="password"
        className="modal__label modal_label_registration"
      >
        Password{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="name" className="modal__label modal_label_registration">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label
        htmlFor="avatar"
        className="modal__label modal_label_registration modal_label_last_element"
      >
        Avatar URL{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
    </ModalWithForm>
  );
}
