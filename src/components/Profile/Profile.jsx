import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SidebBar/SideBar";

function Profile({
  weatherData,
  onCardClick,
  clothingItems,
  handleAddClick,
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
      />
    </div>
  );
}

export default Profile;
