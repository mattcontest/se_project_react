import "../WeatherCard/WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.filter((option) => {
    // console.log("Option", option.condition);
    // console.log("Weather data:", weatherData.condition);
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

  return (
    <section className="weather-card">
      {/* WC Component */}
      <p className="weather-card__temp">{`${weatherData.temp.F}`}°F</p>
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
