import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useGetMunrosQuery, useGetClimbsQuery } from "./services/munros";

function Map() {
  const containerStyle = {
    width: "100%",
    height: "900px",
  };

  const center = {
    lat: 57.1,
    lng: -4.1826492694,
  };

  const MAPS_API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API,
  });

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const { data, isLoading } = useGetMunrosQuery();
  const { data: myClimbs } = useGetClimbsQuery();

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
