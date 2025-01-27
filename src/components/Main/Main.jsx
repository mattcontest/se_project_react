import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "../Main/Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { useContext } from "react";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("From main", weatherData);
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {`${weatherData.temp.F}`} F/ {`${currentTemperatureUnit}`}{" "}
          {`${weatherData.toC}`} You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  onCardClick={handleCardClick}
                  key={item._id}
                  item={item}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
