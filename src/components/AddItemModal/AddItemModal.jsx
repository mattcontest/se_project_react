import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({
  title,
  buttonText,
  activeModal,
  handleCloseModal,
  isOpen,
  onAddItemSubmit,
}) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemSubmit({ name, weather, imgUrl });
    setName("");
    setImgUrl("");
    setWeather("");
  };

  console.log("Chec status of name", name);
  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label  modal__label_name">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label modal__label_image">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleUrlChange}
          value={imgUrl}
        />
      </label>
      <fieldset className="modal__radio-button">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            name="option"
            id="hot"
            type="radio"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="hot"
            checked={weather === "hot" ? true : false}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            name="option"
            id="warm"
            type="radio"
            onChange={handleWeatherChange}
            className="modal__radio-input"
            value="warm"
            checked={weather === "warm" ? true : false}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            name="option"
            id="cold"
            type="radio"
            onChange={handleWeatherChange}
            className="modal__radio-input"
            value="cold"
            checked={weather === "cold" ? true : false}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}
