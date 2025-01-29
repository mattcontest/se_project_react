import "./SideBar.css";
// import avatar from "./assets/avatar-Bc-wR2kI.svg"
import avatar from "../../../src/assets/avatar.svg";
function SideBar() {
  return (
    <div className="sidebar">
      <section className="profile__sidebar">
        <img className="sidebar__avatar" src={avatar} alt="Default Avatar" />
        <p>User Name</p>
      </section>
    </div>
  );
}

export default SideBar;
