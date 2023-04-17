import React from "react";
import { useParams } from "react-router-dom";
import { useGetMunroDetailQuery } from "./services/munrodetail";

const Munro = () => {
    const {munro_id} = useParams();
    const { data, isLoading } = useGetMunroDetailQuery(munro_id);

  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No munros</div>;

  return (
    <table className="table table-striped">
      <thead>
        {data.hillname}
        <tr>
          <th>Meters</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Summary</th>
          <th>Image</th>
          <th>Weather conditions</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>{data.metres}</td>
              <td>{data.latitude}</td>
              <td>{data.longitude}</td>
              <td>{data.summary}</td>
              <td><img src={data.images[1]}/></td>
              <td>{data.weather.weather[0].description}</td>
              <td>{data.weather.main.temp - 273}</td>
            </tr>
      </tbody>
    </table>
  );
};

export default Munro;
