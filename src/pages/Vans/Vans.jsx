import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="van-title">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced $${van.price} / per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price} <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => setSearchParams({type: "simple"})} className="van-type simple">
          Simple
        </button>
        <button onClick={() => setSearchParams({type: "rugged"})} className="van-type rugged">
          Rugged
        </button>
        <button onClick={() => setSearchParams({type: "luxury"})} className="van-type luxury">
          Luxury
        </button>
        <button onClick={() => setSearchParams({})} className="van-type clear-filters">
          Clear filter
        </button>
      </div>

      {vans.length > 0 ? (
        <div className="van-list">{vanElements}</div>
      ) : (
        <h2 className="data-loader">LOADING....</h2>
      )}
    </div>
  );
};

export default Vans;
