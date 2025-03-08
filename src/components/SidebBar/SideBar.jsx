import "./SideBar.css";
// import avatar from "./assets/avatar-Bc-wR2kI.svg"
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import avatar from "../../../src/assets/avatar.svg";
import { useContext } from "react";
function SideBar({ handleEditProfileClick, handleLogoutSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <section className="profile__sidebar">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="Default Avatar"
        />
        <p className="sidebar_avatar">{currentUser.name}</p>
      </section>

      <section className="settings__sidebar">
        <button className="edit-profile" onClick={handleEditProfileClick}>
          <a className="btn_text">Change profile data</a>
        </button>
        <button className="logout" onClick={handleLogoutSubmit}>
          <a className="btn_text">Log Out</a>
        </button>
      </section>
    </div>
  );
}

export default SideBar;
