import "../WeatherCard/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.filter((option) => {
    // console.log("Checking the prop", currentTemperatureUnit);

    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let currentWeather;
  if (weatherOption.length === 0) {
    currentWeather = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    currentWeather = weatherOption[0];
  }

  // console.log("Check wdata", weatherData);

  return (
    <section className="weather-card">
      {/* WC Component */}
      <p className="weather-card__temp">
        {/* {`${
          currentTemperatureUnit == "F"
            ? weatherData.temp.F
            : weatherData.temp.C
        }`}
        °{`${currentTemperatureUnit}`} */}
        {`${weatherData.temp[currentTemperatureUnit]}`}°
        {`${currentTemperatureUnit}`}
      </p>
      <img
        src={currentWeather?.url}
        alt={` Time: ${currentWeather?.day ? "day" : "night"} Weather: ${
          currentWeather?.condition
        }`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
