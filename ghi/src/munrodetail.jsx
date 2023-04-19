import React from "react";
import { useParams } from "react-router-dom";
import { useGetMunroDetailQuery } from "./services/munrodetail";

const Munro = () => {
  const { munro_id } = useParams();
  const { data, isLoading } = useGetMunroDetailQuery(munro_id);

  if (isLoading) return <div>Loading...</div>;

  const region_names = {
    "01": "Firth of Clyde to Strathtay",
    "02": "Loch Rannoch to Loch Tay",
    "03": "Loch Leven to Glen Lochy",
    "04": "Fort William to Loch Ericht",
    "05": "Loch Ericht to Glen Garry",
    "06": "Forest of Atholl to Blairgowrie",
    "07": "Braemar to Montrose",
    "08": "The Cairngorms",
    "09": "Spean Bridge to Elgin",
    10: "Glen Shiel to Glenfinnan",
    11: "Loch Duich to Loch Ness",
    12: "Kyle of Lochalsh to Inverness",
    13: "Loch Carron to Loch Maree",
    14: "Loch Maree to Garve",
    15: "Ullapool to the Moray Firth",
    16: "The Far North",
    17: "Skye and Mull",
  };

  function filterImages(images) {
    let filteredImages = [];
    for (let i = 0; i < images.length; i++) {
      if (images[i].endsWith(".jpg")) {
        filteredImages.push(images[i]);
      }
    }
    return filteredImages;
  }

  return (
    <>
      <h2> {data.hillname}</h2>
      <img
        src={data.images[1]}
        className="rounded"
        alt={data.hillname}
        style={{ width: "400px", height: "auto" }}
      ></img>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Region</th>
            <th>Meters</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Summary</th>
            <th>Weather conditions</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.region}: {region_names[data.region.slice(0, -1)]}
            </td>
            <td>{data.metres}</td>
            <td>{data.latitude}</td>
            <td>{data.longitude}</td>
            <td>{data.summary}</td>
            {/* <td>
              <img src={data.images[1]} />
            </td> */}
            <td>{data.weather.weather[0].description}</td>
            <td>
              {Math.floor((data.weather.main.temp - 273.15) * 1.8 + 32)}&#176;F
            </td>
          </tr>
        </tbody>
      </table>
      visibility: {data.weather.visibility}m
    </>
  );
};

export default Munro;