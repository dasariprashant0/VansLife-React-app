import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const HostVanDetails = () => {
    const {id} = useParams()
    const [currentVan, setCurrentVan] = useState(null)

    useEffect(() => {
      fetch(`/api/host/vans/${id}`)
        .then((res) => res.json())
        .then((data) => setCurrentVan(data.vans))
    }, [id]);

    

  return (
    <div>
      {currentVan ? (
        <div>
          <img src={currentVan.imageUrl} alt={`Image of ${currentVan.name}`} width={150} />
          <h2>{currentVan.name}</h2>
          <p>{currentVan.price}</p>
          <p>{currentVan.type}</p>
        </div>
      ) : (
        <h2 className="data-loader">LOADING....</h2>
      )}
    </div>
  );
}

export default HostVanDetails