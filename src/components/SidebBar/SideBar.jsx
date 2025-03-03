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
      {/* <section className="profile__sidebar"> */}
      {/* <button> */}
      {/* </button> */}
      {/* </section> */}
      <section className="settings__sidebar">
        <button className="edit-profile">
          <a className="btn_text">Edit Profile</a>
        </button>
        <button className="logout">
          <a className="btn_text">Log Out</a>
        </button>
      </section>
    </div>
  );
}

export default SideBar;
