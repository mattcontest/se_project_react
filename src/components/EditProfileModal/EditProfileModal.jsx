import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useEffect } from "react";

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

  const currentUser = useContext(CurrentUserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar });
  };

  useEffect(() => {
    if (isOpen !== undefined) {
      console.log("Current User", currentUser);
    }
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [isOpen]);

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      editProfileModal={true}
    >
      <label htmlFor="text" className="modal__label modal_label_edit">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor="URL" className="modal__label modal_label_edit">
        Avatar{""}
        <input
          type="text"
          className="modal__input"
          id="avatar"
          value={avatar}
          placeholder="Avatar"
          onChange={handleAvatarChange}
        />
      </label>
      <div className="button__container">
        <button className="modal__edit_btn " onClick={handleEditProfileSubmit}>
          <a className="modal__submit_text">{buttonText}</a>
        </button>
      </div>
    </ModalWithForm>
  );
}
