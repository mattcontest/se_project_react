import "./ItemModal.css";
import close_btn from "../../assets/close-btn.svg";

function ItemModal({ activeModal, card, handleCloseModal }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close"
          onClick={handleCloseModal}
        >
          <img className="button_close" src={close_btn} alt="close button" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__container">
          <p className="modal_item_title">{card.name}</p>
          <p className="modal__item_weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
