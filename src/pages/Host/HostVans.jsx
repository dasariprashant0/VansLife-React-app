import React, { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}

const HostVans = () => {
  const vans = useLoaderData();

  function getHostVansData(vans) {
    return vans.map((van) => (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price} /day</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <Suspense fallback={<h2 className="data-loader">Loading your vans...</h2>}>
          <Await resolve={vans.hostVans}>
            {getHostVansData}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default HostVans;
