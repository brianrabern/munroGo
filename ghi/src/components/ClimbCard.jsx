import React from "react";
import { formatDistance, subDays } from "date-fns";
import { useGetMunrosQuery } from "../services/munros";

export default function ClimbCard({ climb }) {
  const { data: munros, isLoading } = useGetMunrosQuery();
  const date = formatDistance(new Date(climb.datetime), new Date(), {
    addSuffix: true,
  });
  const munro = munros.find((munro) => munro.id === climb.munro_id);
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{munro.hillname}</h2>
        <p>{date}</p>
        <p>Difficulty: {climb.difficulty}</p>
        <p>Duration: {climb.duration}</p>
        <p>Notes: {climb.notes}</p>
        <p>Weather: {climb.weather}</p>
      </div>
    </div>
  );
}
