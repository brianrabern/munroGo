import React, { useState, useEffect } from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import MapComp from "./MapComp";

const MainMap = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: myClimbs } = useGetClimbsQuery();
  const [markers, setMarkers] = useState([]);

  const center = {
    lat: 57.1,
    lng: -4.1826492694,
  };
  const zoom = 7.9;
  const width = "100%";
  const height = "900px";

  const handleClick = (munro) => {
    window.location.href = `/munros/${munro.id}`;
  };

  useEffect(() => {
    if (data) {
      const climbsList = myClimbs.map((climb) => climb.munro_id);
      const newMarkers = data.map((munro) => {
        if (climbsList.includes(munro.id)) {
          return {
            id: munro.id,
            position: {
              lat: Number(munro.latitude),
              lng: Number(munro.longitude),
            },
            title: munro.hillname,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/pal4/icon60.png",
            },
          };
        } else {
          return {
            id: munro.id,
            position: {
              lat: Number(munro.latitude),
              lng: Number(munro.longitude),
            },
            title: munro.hillname,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/pal4/icon52.png",
            },
          };
        }
      });

      setMarkers(newMarkers);
    }
  }, [data]);

  return (
    <div>
      <MapComp
        center={center}
        zoom={zoom}
        markers={markers}
        width={width}
        height={height}
        handleClick={handleClick}
      />
    </div>
  );
};
export default MainMap;
