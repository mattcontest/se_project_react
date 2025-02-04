import "./ItemModal.css";
import close_btn from "../../assets/button-close-transparent.svg";
import useModalClose from "../../utils/UseModalClose";

function ItemModal({
  activeModal,
  card,
  handleCloseModal,
  onDeleteCard,
  isOpen,
}) {
  useModalClose(isOpen, handleCloseModal);
  return (
    <div className={`modal ${activeModal === "preview" && "modal_open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close modal__close_item"
          onClick={handleCloseModal}
        >
          <img className="button_close" src={close_btn} alt="close button" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__container">
          <div className="modal__item_box">
            <p className="modal_item_title">{card.name}</p>
            <button
              className="modal__delete_button"
              onClick={() => {
                onDeleteCard(card._id);
              }}
            >
              Delete
            </button>
          </div>
          <p className="modal__item_weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
