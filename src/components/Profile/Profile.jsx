import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SidebBar/SideBar";

function Profile({ weatherData, onCardClick, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        weatherData={weatherData}
        handleCardClick={onCardClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
