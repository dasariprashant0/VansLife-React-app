import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVan(params.id);
}

const HostVanDetails = () => {
  const currentVan = useLoaderData();

  const activeLink = {
    fontWeight: "700",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to={".."} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img
            src={currentVan.imageUrl}
            alt={`Image of ${currentVan.name}`}
            width={150}
          />
          <div className="host-van-detail-info-text">
            <i className={`van-type ${currentVan.type} selected`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price} /day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to={"."}
            end
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Details
          </NavLink>
          <NavLink
            to={"pricing"}
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"photos"}
            style={({ isActive }) => (isActive ? activeLink : null)}
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetails;
