import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ClothesSection({
  weatherData,
  onCardClick,
  clothingItems,
  handleAddClick,
}) {
  const currentUser = useContext(CurrentUserContext);
  console.log("Check currentUser from ClotheSection", currentUser);

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
          .filter((item) => item._id === currentUser._id)
          .map((item) => {
            return (
              <ItemCard onCardClick={onCardClick} key={item._id} item={item} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
