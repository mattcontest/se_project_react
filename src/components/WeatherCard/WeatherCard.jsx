import "../WeatherCard/WeatherCard.css";
import sunny from "../../assets/sunny1.svg";
function WeatherCard() {
  return (
    <section className="weather-card">
      {/* WC Component */}
      <p className="weather-card__temp">75°F</p>
      <img src={sunny} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
