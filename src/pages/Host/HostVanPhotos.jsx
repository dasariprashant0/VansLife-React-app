import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return (
    <div>
      <img
        src={currentVan.imageUrl}
        alt={`Image of ${currentVan.name}`}
        className="host-van-detail-image"
      />
    </div>
  );
};

export default HostVanPhotos;
