import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "../Main/Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import { useContext } from "react";

function Main({ weatherData, handleCardClick, clothingItems, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("From main", clothingItems);
  console.log("weatherData.type:", weatherData.type);
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {`${
            currentTemperatureUnit == "F"
              ? weatherData.temp?.F
              : weatherData.temp?.C
          }`}
          {`${currentTemperatureUnit}`} You may want to wear:
        </p>
        <ul className="cards__list">
          {/* {defaultClothingItems */}
          {clothingItems

            .slice()
            .reverse()

            .filter((item) => {
              // console.log("checking", item._id, "weather:", item.weather);

              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  onCardClick={handleCardClick}
                  key={item._id}
                  item={item}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
