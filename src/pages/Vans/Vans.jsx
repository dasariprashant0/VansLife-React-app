import React, { Suspense, useEffect, useState } from "react";
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const vansData = useLoaderData();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return (
      <h2 aria-live="assertive" className="data-loader">
        There was an error: {error.message}
      </h2>
    );
  }

  function getVansData(vans) {
    const displayVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const getVansData = displayVans.map((van) => (
      <div key={van.id} className="van-title">
        <Link
          to={van.id}
          state={{
            search: `?${searchParams.toString()} `,
            type: typeFilter,
          }}
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
      <>
        <div className="van-list">{getVansData}</div>
      </>
    );
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>

      <Suspense
        fallback={<h2 className="data-loader">Loading your vans...</h2>}
      >
        <Await resolve={vansData.vans}>{getVansData}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
