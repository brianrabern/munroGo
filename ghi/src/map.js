import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useGetMunrosQuery } from "./services/munros";

const containerStyle = {
  width: "100%",
  height: "900px",
};

const center = {
  lat: 57.1,
  lng: -4.1826492694,
};

function Map() {
  const MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API,
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const { data, isLoading } = useGetMunrosQuery();

  const handleClick = (munro) => {
    window.location.href = `/munros/${munro.id}`;
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (data) {
      const newMarkers = data.map((munro) => ({
        id: munro.id,
        position: {
          lat: Number(munro.latitude),
          lng: Number(munro.longitude),
        },
        title: munro.hillname,
      }));

      setMarkers(newMarkers);
    }
  }, [data]);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        const { id, position, title } = marker;
        const newMarker = new window.google.maps.Marker({
          position,
          map,
          title,
        });

        newMarker.addListener("click", () => {
          handleClick(marker);
        });
      });
    }
  }, [map, markers]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7.9}
      mapTypeId={"terrain"}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <></>
  );
}

export default React.memo(Map);
