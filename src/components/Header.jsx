import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <NavLink className="site-logo" to={"/"}>
        #VANLIFE
      </NavLink>
      <nav>
        <NavLink
          to={"/host"} className={({ isActive }) => isActive ? "activeLink" : null}>
          Host
        </NavLink>
        <NavLink
          to={"/about"} className={({ isActive }) => isActive ? "activeLink" : null}>
          About{" "}
        </NavLink>
        <NavLink
          to={"/vans"} className={({ isActive }) => isActive ? "activeLink" : null}>
          VANS
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
