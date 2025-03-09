import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  onCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="clothes-section">
      <div className="clothes__section_tools">
        <p className="clothes__tool_title">Your Items</p>
        <button className="clothes__tool_button" onClick={handleAddClick}>
          +Add new
        </button>
      </div>

      <ul className="clothes-section__items">
        {clothingItems
          .slice()
          .reverse()
          .filter((item) => {
            return item.owner?._id === currentUser._id;
          })
          .map((item) => {
            return (
              <ItemCard
                onCardClick={onCardClick}
                key={item._id}
                item={item}
                onCardLike={onCardLike}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
