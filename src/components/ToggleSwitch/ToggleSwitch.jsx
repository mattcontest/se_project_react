import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  //   console.log(
  //     "Checking Temperature Unit from ToggleSwitch.jsx",
  //     currentTemperatureUnit
  //   );

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch_checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text  toggle-switch__text_F ${
          currentTemperatureUnit === "F"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text  toggle-switch__text_C ${
          currentTemperatureUnit === "C"
            ? "toggle-switch__text_color_white"
            : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
