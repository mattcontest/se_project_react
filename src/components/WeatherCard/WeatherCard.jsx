import "../WeatherCard/WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.filter((option) => {
    console.log("Option", option.condition);
    console.log("Weather data:", weatherData.condition);
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  // console.log(option.condition);

  // console.log("Check this -->", weatherOption);
  // console.log("Check this -->", weatherOption[0].url);
  const currentWeather = weatherOption[0];
  // const day = weatherOption[0]?.day;
  // const imgUrl = weatherOption[0]?.url;
  // const condition = weatherOption[0]?.condition;
  // console.log(imgUrl);

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
