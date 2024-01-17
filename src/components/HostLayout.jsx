import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <div className="host-nav">
        <NavLink
          to={"/host"}
          end
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/host/income"}
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Income
        </NavLink>
        <NavLink
          to={"/host/vans"}
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to={"/host/reviews"}
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
