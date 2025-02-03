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
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { getItems, deleteItem, addItem } from "../../utils/api.js";

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
  // console.log("Weather Data", weatherData);

  // const [clothingItems, setClothingItems] = useState([...defaultClothingItems]);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempereatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTempereatureUnit(currentTemperatureUnit === "C" ? "F" : "C");
  };

  // console.log("Stauts of Loading", isWeatherLoaded);

  // console.log("Current temperature unit", currentTemperatureUnit);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
    console.log("Selected card ID -->", card._id);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    // Cleanup Function
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const closeActiveModal = () => {
    // console.log("Does it work?");
    setActiveModal("");
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    // const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    console.log("Submitting...", { name, weather, imageUrl });
    return addItem({ name, weather, imageUrl })
      .then((res) => {
        console.log("After adding it", res);
        setClothingItems((prevItems) => [res, ...prevItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    // setClothingItems((prevItems) => [
    //   { name, imageUrl, weather },
    //   ...prevItems,
    // ]);

    // setClothingItems([{ name, link: imgUrl, weather }, ...clothingItems]);
  };

  const handleDeleteItem = (id) => {
    // console.log("Attempting deleting", id);
    // const testF = (clothingItems) => {
    //   const data = clothingItems.filter((item) => item._id != id);
    //   return data;
    // };
    // console.log("Check what returns filter", testF(clothingItems));
    deleteItem(id)
      .then((res) => {
        console.log("Here's at the end:", res);
      })
      .then(
        setClothingItems((prevItems) => {
          const filtered = prevItems.filter((item) => item._id !== id);
          return filtered;
        }),
        console.log("Succesfully deleted", id),
        closeActiveModal()
      )
      .catch((error) => {
        console.error("Error: ", error);
      });

    // setClothingItems((prevItems) => {
    //   const filtered = prevItems.filter((item) => item._id !== id);
    //   return filtered;
    // });

    // console.log("clothingItems state after", clothingItems);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        // console.log(data);
        const filterData = filterWeatherData(data);
        // console.log("Cargo", filterData);
        setWeatherData(filterData);
        setIsWeatherLoaded(true);
        // console.log("Status of loading", isWeatherLoaded);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        // console.log("logging data", data);
        setClothingItems([...data]);
        // console.log("Check ClothingIems state", clothingItems);
      })
      .catch(console.error);
  }, []);

  // console.log("Staut of Loading after", isWeatherLoaded);

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
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  currentTemperatureUnit={currentTemperatureUnit}
                  clothingItems={clothingItems}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>

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
          onDeleteCard={handleDeleteItem}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
