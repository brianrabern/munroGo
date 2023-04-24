import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const MapComp = ({ center, zoom, markers, width, height, handleClick }) => {
  const containerStyle = {
    width: width,
    height: height,
  };

  const MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API,
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        const { id, position, title, icon } = marker;
        const newMarker = new window.google.maps.Marker({
          position,
          map,
          title,
          icon,
        });

        newMarker.addListener("click", () => {
          handleClick(marker);
        });
      });
    }
  }, [map, markers]);
  console.log(isLoaded);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={"terrain"}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : (
    <div>
      <p className="text-[#adb9c0] text-[14px] leading-[24px] font-medium">
        Haste ye nae mair, for the map's a-comin' tae ye...
      </p>
    </div>
  );
};

export default MapComp;
