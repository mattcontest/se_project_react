import "../WeatherCard/WeatherCard.css";
import sunny from "../../assets/sunny1.svg";
import { weatherOptions } from "../../utils/constants";
// import { sunny, cloudy, fog, rain, snow, storm } from "../../assets/day/";
// import {
//   night_sunny,
//   night_cloudy,
//   night_fog,
//   night_rain,
//   night_snow,
//   night_storm,
// } from "../../assets/night/";

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
  const imgUrl = weatherOption[0]?.url;
  console.log(imgUrl);

  return (
    <section className="weather-card">
      {/* WC Component */}
      <p className="weather-card__temp">{`${weatherData.temp.F}`}°F</p>
      <img src={imgUrl} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
