import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  console.log(type);

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button_van">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={`Image of ${van.name}`} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span> /day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2 className="data-loader">LOADING....</h2>
      )}
    </div>
  );
};

export default VanDetail;
