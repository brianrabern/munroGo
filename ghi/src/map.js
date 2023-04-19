import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { useGetMunrosQuery } from "./services/munros";

const containerStyle = {
  width: "100%",
  height: "900px",
};

const center = {
  lat: 56.81691839,
  lng: -4.1826492694,
};

function Map() {
  const MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API,
  });

  const [map, setMap] = React.useState(null);

  const { data, isLoading } = useGetMunrosQuery();

  const handleClick = (munro) => {
    window.location.href = `/munros/${munro.id}`;
  };

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {data &&
        data.map((munro) => {
          return (
            <Marker
              clickable={true}
              key={munro.id}
              title={munro.hillname}
              onClick={() => {
                handleClick(munro);
              }}
              position={{
                lat: Number(munro.latitude),
                lng: Number(munro.longitude),
              }}
            />
          );
        })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
