import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SidebBar/SideBar";

function Profile({
  weatherData,
  onCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
  handleEditProfileClick,
}) {
  return (
    <div className="profile">
      <SideBar handleEditProfileClick={handleEditProfileClick} />
      <ClothesSection
        weatherData={weatherData}
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
