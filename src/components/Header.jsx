import React from "react";
import { Link, NavLink } from "react-router-dom";
import avatarIcon from "../assets/avatar-icon.png";
import shutdownIcon from "../assets/shutdown-icon.png";

const Header = () => {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <NavLink className="site-logo" to={"/"}>
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to={"/host"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          About{" "}
        </NavLink>
        <NavLink
          to={"/vans"}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          Vans
        </NavLink>
        <Link to={"login"} className="login-link">
          <img src={avatarIcon} alt="Avatar Icon" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>
          <img src={shutdownIcon} alt="logout icon" className="login-icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
