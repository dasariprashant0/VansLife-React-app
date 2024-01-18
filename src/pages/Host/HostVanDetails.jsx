import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

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
      {currentVan ? (
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
      ) : (
        <h2 className="data-loader">LOADING....</h2>
      )}
    </section>
  );
};

export default HostVanDetails;
