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
  handleLoginSubmitInstead,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  // };

  const handleLoginSubmit = () => {
    handleLoginSubmitInstead();
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    onSignupSubmit({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
      // onSubmit={onSignupSubmit}
    >
      <label htmlFor="email" className="modal__label modal_label_registration">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label
        htmlFor="password"
        className="modal__label modal_label_registration"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="name" className="modal__label modal_label_registration">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="user_name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="avatar"
        className="modal__label modal_label_registration modal_label_last_element"
      >
        Avatar URL{""}
        <input
          type="url"
          className="modal__input"
          id="avatar_url"
          placeholder="Avatar"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
      <div className="button__container">
        <button
          type="submit"
          className="modal__signup"
          onClick={handleRegistration}
        >
          <a className="modal__submit_text">{buttonText}</a>
        </button>

        <button
          type="button"
          className="modal__login"
          onClick={handleLoginSubmit}
        >
          <a className="modal__login_text">or Log In</a>
        </button>
      </div>
    </ModalWithForm>
  );
}
