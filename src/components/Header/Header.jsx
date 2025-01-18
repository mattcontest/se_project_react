import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  console.log("Check weatherData", weatherData);

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <p className="header__date-and-location">{`${currentDate}, ${weatherData.city}`}</p>
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
