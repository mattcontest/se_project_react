import "./ModalWithForm.css";
import close_btn from "../../assets/close-btn.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garmet</h2>
        <button className="modal__close">
          <img className="button_close" src={close_btn} alt="close button" />
        </button>
        <form className="modal__form">
          <label
            htmlFor="name"
            className="modal__label  modal__label_name"
            id="name"
          >
            Name{""}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label
            htmlFor="imageUrl"
            className="modal__label modal__label_image"
            id="image"
          >
            Image{""}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-button">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__radio-input" />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input id="warm" type="radio" className="modal__radio-input" />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__radio-input" />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit">
            <a className="modal__submit_text">Add garment</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
