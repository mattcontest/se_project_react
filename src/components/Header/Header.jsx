import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // console.log("Check weatherData", weatherData);
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const Checkbox = ({ label, value, onChange, labelCss, inputCss }) => {
    return (
      <label className={labelCss}>
        <input
          className={inputCss}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    );
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
      {/* <input type="checkbox" value="F" className="header__toggle_switch" /> */}
      {/* <Checkbox
        label="F/C"
        inputCss="toggle_switch_input"
        labelCss="header__toggle_switch"
      /> */}
      <ToggleSwitch />
      <button
        type="button"
        onClick={handleAddClick}
        className="header__add-clothes"
      >
        +Add Clothes
      </button>

      <div className="header__user-container">
        <p className="header__username">Terrance User</p>
        <img src={avatar} alt="Terrence" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
