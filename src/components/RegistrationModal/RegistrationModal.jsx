import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegistrationModal({
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
  //   const [isLoading, setIsLoading] = useState(false);
  return (
    <ModalWithForm
      title={title}
      buttonText={""}
      activeModal={activeModal}
      handleCloseModal={""}
      isOpen={""}
      onSubmit={""}
    >
      <label htmlFor="email" className="modal__label modal_label_name">
        Email{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password" className="modal__label modal_label_name">
        Password{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="name" className="modal__label modal_label_name">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="avatar" className="modal__label modal_label_name">
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
