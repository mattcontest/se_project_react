import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function EditProfileModal({
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  isOpen,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.taget.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    >
      <label htmlFor="text" className="modal__label">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          value={name}
          placeholder="Name"
        />
      </label>

      <label htmlFor="URL" className="modal__label">
        Avatar{""}
        <input
          type="text"
          className="modal__input"
          id="avatar"
          value={avatar}
          placeholder="Avatar"
        />
      </label>
      <div className="button__container">
        <button className="modal__edit_btn" onClick={handleEditProfileSubmit}>
          <a className="modal__submit_text">{buttonText}</a>
        </button>
      </div>
    </ModalWithForm>
  );
}
