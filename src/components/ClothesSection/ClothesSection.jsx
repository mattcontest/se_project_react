import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
function ClothesSection({
  weatherData,
  onCardClick,
  clothingItems,
  handleAddClick,
}) {
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
          .filter((item) => {
            return item.weather === weatherData.type;
          })
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
