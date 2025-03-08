import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import {
  getItems,
  deleteItem,
  addItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import {
  registerUser,
  loginUser,
  getUserInfo,
  editProfileInfo,
} from "../../utils/auth.js";

function App() {
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: `${isWeatherLoaded ? " " : "loading.."}` },
    city: "",
    condition: "",
    isDay: Boolean,
  });

  // const navigate = useNavigate();
  const [itemsUpdated, setItemsUpdated] = useState(false);
  const [likeUpdated, setLikeUpdated] = useState(false);
  const [userUpdated, setUserUpdated] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempereatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState("");
  // const [checkingAuth, setCheckingAuth] = useState(true);
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

  const handleEditProfileClick = () => {
    setActiveModal("edit-data");
  };

  const handleLoginSubmitInstead = () => {
    closeActiveModal();
    setActiveModal("login");
  };
  const handleSignupSubmitInstead = () => {
    closeActiveModal();
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

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    const updateCard = (updatedCard) => {
      setClothingItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, ...updatedCard } : item
        )
      );
    };
    if (!isLiked) {
      addCardLike(id, token)
        .then((res) => {
          updateCard(res);
          setLikeUpdated(true);
        })
        .catch((err) => console.log(err));
    }
    if (isLiked) {
      removeCardLike(id, token)
        .then((res) => {
          updateCard(res);
          setLikeUpdated(true);
        })
        .catch((err) => console.log(err));
    }

    // !isLiked
    //   ? addCardLike(id, token).then((updatedCard) => {
    //       setClothingItems((cards) => {
    //         cards.map((item) => (item._id === id ? updatedCard : item));
    //       }).catch((err) => console.log(err));
    //     })
    //   : removeCardLike(id, token)
    //       .then((updatedCard) => {
    //         setClothingItems((cards) => {
    //           cards.map((item) => (item._id === id ? updatedCard : item));
    //         });
    //       })
    //       .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    // const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;
    console.log("Submitting...", { name, weather, imageUrl });
    return addItem({ name, weather, imageUrl }).then((res) => {
      console.log("After adding it", res);
      // setClothingItems((prevItems) => [res.data, ...prevItems]);
      setItemsUpdated((prev) => !prev);
      closeActiveModal();
    });
    // setClothingItems((prevItems) => [
    //   { name, imageUrl, weather },
    //   ...prevItems,
    // ]);

    // setClothingItems([{ name, link: imgUrl, weather }, ...clothingItems]);
  };

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems([...data]);
      })
      .catch(console.error);
  }, [itemsUpdated]);

  const handleLogoutSubmit = () => {
    localStorage.removeItem("jwt");
    // navigate("/")
    setIsLoggedIn(false);
    setCurrentUser("");
    console.log("Logged out!");
  };

  const handleLoginSubmit = (userData) => {
    //Todo
    console.log("Login data before", userData.email, userData.password);
    if (!userData.email || !userData.password) {
      console.log("Error with password or Email");
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

  const handleEditProfileSubmit = (userData) => {
    console.log("Check info before edit", userData);
    return editProfileInfo(userData).then((res) => {
      if (res.name == userData.name) {
        setUserUpdated(true);
        closeActiveModal();
        //Allowing time to refresh state in useEffect before resetting userUpdated state back to default
        // setTimeout(() => setUserUpdated(false), 500);
      }
      console.log("Check from edit profile change", res);
    });
  };

  // useEffect(() => {
  //   // getItems()
  //   //   .then((data) => {
  //   //     setClothingItems([...data]);
  //   //   })
  //   //   .catch(console.error);
  // }, [userUpdated]);

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
      //Resetting setUserUpdated to false after fetching user info
      setUserUpdated(false);
      console.log("How many times happen?");
    });
  }, [isLoggedIn, userUpdated]);

  //Using this useEffect to refresh getItems after their either got liked/disliked
  //And switching/defaulting back to original likeUpdated status (false)
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems([...data]);
      })
      .catch(console.error);
    console.log("After running getItems(), turn likeupdated to false");
    setLikeUpdated(false);
  }, [likeUpdated]);

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
                    onCardLike={handleCardLike}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    {" "}
                    <Profile
                      weatherData={weatherData}
                      onCardLike={handleCardLike}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleEditProfileClick={handleEditProfileClick}
                      handleLogoutSubmit={handleLogoutSubmit}
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
            handleLoginSubmitInstead={handleLoginSubmitInstead}
          />
          <LoginModal
            title="Login"
            buttonText="Login"
            activeModal={activeModal}
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "login"}
            onSubmit={handleLoginSubmit}
            handleSignupSubmitInstead={handleSignupSubmitInstead}
          />
          <EditProfileModal
            title="Change profile data"
            buttonText="Save changes"
            activeModal={activeModal}
            handleCloseModal={closeActiveModal}
            isOpen={activeModal === "edit-data"}
            onSubmit={handleEditProfileSubmit}
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
