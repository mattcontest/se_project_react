import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
function ClothesSection({ weatherData, handleCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes__section_tools">
        <p className="clothes__tool_title">Your Items</p>
        <button className="clothes__tool_button">+Add new</button>
      </div>

      <ul className="cards__list profile__cards">
        {clothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard
                onCardClick={handleCardClick}
                key={item._id}
                item={item}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
