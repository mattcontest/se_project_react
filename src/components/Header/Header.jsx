import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button className="header__add-clothes">+Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrance User</p>
        <img src={avatar} alt="Terrence" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
