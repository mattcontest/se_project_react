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
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { getItems, deleteItem, addItem } from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { registerUser, loginUser, getUserInfo } from "../../utils/auth.js";

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

  const navigate = useNavigate();
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempereatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = () => {
    console.log("Clicked Signup");
    setActiveModal("signup");
  };

  // useEffect(() => {
  //   if (!activeModal) return;

  //   const handleEscClose = (e) => {
  //     if (e.key === "Escape") {
  //       closeActiveModal();
  //     }
  //   };

  //   document.addEventListener("keydown", handleEscClose);

  //   // Cleanup Function
  //   return () => {
  //     document.removeEventListener("keydown", handleEscClose);
  //   };
  // }, [activeModal]);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    // const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    console.log("Submitting...", { name, weather, imageUrl });
    return addItem({ name, weather, imageUrl }).then((res) => {
      console.log("After adding it", res);
      setClothingItems((prevItems) => [res.data, ...prevItems]);
      closeActiveModal();
    });
    // setClothingItems((prevItems) => [
    //   { name, imageUrl, weather },
    //   ...prevItems,
    // ]);

    // setClothingItems([{ name, link: imgUrl, weather }, ...clothingItems]);
  };

  const handleLoginSubmit = (userData) => {
    //Todo
    console.log("Login data before", userData.email, userData.password);
    if (!userData.email || !userData.password) {
      return;
    }

    loginUser({ email: userData.email, password: userData.password }).then(
      (res) => {
        console.log("check", res);
        if (res) {
          localStorage.setItem("jwt", res.token);
          setActiveModal("");
          setIsLoggedIn(true);
          console.log("After login", res);
        }
      }
    );
  };

  const handleSignupSubmit = (userData) => {
    //Todo
    console.log("To complete soon", userData);
    registerUser(userData).then((res) => {
      console.log("check", res);
      if (res._id) {
        console.log("After registration", res);
        handleLoginSubmit(userData);
        setActiveModal("");
      }
    });
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
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    getUserInfo(jwt).then((res) => {
      console.log("Check response from jwt", res);
      if (res) {
        setCurrentUser(res);
        setIsLoggedIn(true);
        // setUserAvatar(res.avatar);
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log("Check State", currentUser);
  // }, [currentUser]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        // console.log("Cargo", filterData);
        setWeatherData(filterData);
        setIsWeatherLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems([...data]);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              handleSignupClick={handleSignupClick}
              handleLoginClick={handleLoginClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      weatherData={weatherData}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
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
          <RegistrationModal
            title="Signup"
            buttonText="Signup"
            activeModal={activeModal}
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "signup"}
            onSignupSubmit={handleSignupSubmit}
          />
          <LoginModal
            title="Login"
            buttonText="Login"
            activeModal={activeModal}
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "login"}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseModal={closeActiveModal}
            onDeleteCard={handleDeleteItem}
            isOpen={activeModal}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
