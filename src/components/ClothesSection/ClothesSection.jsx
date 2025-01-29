import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
function ClothesSection({ weatherData, handleCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes__section_tools">
        <p>Your Items</p>
        <button>+Add new</button>
      </div>
      <ul className="cards__list">
        {/* {defaultClothingItems */}
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
