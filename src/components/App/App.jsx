import { useState, useEffect } from "react";

import "./App.css";
import { defaultClothingItems } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";

function App() {
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: `${isWeatherLoaded ? " " : "loading.."}` },
    // temp: { F: `loading..` },
    city: "",
    type: "",
    condition: "",
    isDay: Boolean,
  });
  console.log("Weather Data", weatherData);

  const [clothingItems, setClothingItems] = useState([...defaultClothingItems]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempereatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTempereatureUnit(currentTemperatureUnit === "C" ? "F" : "C");
  };

  console.log("Stauts of Loading", isWeatherLoaded);

  // console.log("Current temperature unit", currentTemperatureUnit);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
    // console.log("It's clicking");
  };

  const closeActiveModal = () => {
    // console.log("Does it work?");
    setActiveModal("");
  };

  const handleAddItemSubmit = ({ name, weather, imgUrl }) => {
    // const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    setClothingItems((prevItems) => [
      { name, link: imgUrl, weather },
      ...prevItems,
    ]);
    // setClothingItems([{ name, link: imgUrl, weather }, ...clothingItems]);
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        // console.log(data);
        const filterData = filterWeatherData(data);
        console.log("Cargo", filterData);
        setWeatherData(filterData);
        setIsWeatherLoaded(true);
        // console.log("Status of loading", isWeatherLoaded);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  console.log("Staut of Loading after", isWeatherLoaded);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            currentTemperatureUnit={currentTemperatureUnit}
          />
          <Main
            weatherData={weatherData}
            handleCardClick={handleCardClick}
            currentTemperatureUnit={currentTemperatureUnit}
            clothingItems={clothingItems}
          />

          <Footer />
        </div>
        <AddItemModal
          title="New Garment"
          buttonText="Add Garment"
          activeModal={activeModal}
          handleCloseModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItemSubmit={handleAddItemSubmit}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseModal={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
