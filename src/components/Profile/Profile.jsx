import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SidebBar/SideBar";

function Profile({ weatherData, handleCardClick, clothingItems }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        weatherData={weatherData}
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
    </div>
  );
}

export default Profile;
