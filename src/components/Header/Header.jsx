// import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleSignupClick,
  handleLoginClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // console.log("Check weatherData", weatherData);
  // const [checked, setChecked] = React.useState(false);
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  // const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentUser = useContext(CurrentUserContext);

  // const Checkbox = ({ label, value, onChange, labelCss, inputCss }) => {
  //   return (
  //     <label className={labelCss}>
  //       <input
  //         className={inputCss}
  //         type="checkbox"
  //         checked={checked}
  //         onChange={onChange}
  //       />
  //       {label}
  //     </label>
  //   );
  // };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">{`${currentDate}, ${weatherData?.city}`}</p>

      <ToggleSwitch />
      {currentUser && (
        <button
          type="button"
          onClick={handleAddClick}
          className="header__add-clothes"
        >
          +Add Clothes
        </button>
      )}

      {!currentUser && (
        <button
          type="button"
          className="header__signup"
          onClick={handleSignupClick}
        >
          Signup
        </button>
      )}

      {!currentUser && (
        <button
          type="button"
          className="header__login"
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}

      <Link className="header__link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">
            {currentUser ? currentUser.name : "Guest"}
          </p>
          <img
            src={currentUser?.avatar ? currentUser.avatar : avatar}
            alt="Terrence"
            className="header__avatar"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
