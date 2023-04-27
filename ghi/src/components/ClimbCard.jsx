import React from "react";
import { formatDistance, formatRelative } from "date-fns";
import { useGetMunrosQuery } from "../services/munros";

export default function ClimbCard({ climb }) {
  const { data: munros, isLoading } = useGetMunrosQuery();
  const date = formatRelative(new Date(climb.datetime), new Date(), {
    addSuffix: true,
  });
  const munro = munros.find((munro) => munro.id === climb.munro_id);
  return (
    <div className="card w-96 text-[#737a7e]">
      <div className="card-body">
        <h2 className="card-title font-bold">{munro.hillname}</h2>
        <p className="text-lg">{date}</p>
        <p className="text-lg">Difficulty: {climb.difficulty}</p>
        <p className="text-lg">Duration: {climb.duration}</p>
        <p className="text-lg">Notes: {climb.notes}</p>
        <p className="text-lg">Weather: {climb.weather}</p>
      </div>
      <figure>
        <img
          className="rounded-box"
          src={
            climb.image
              ? `data:image/png;base64,${climb.image}`
              : "https://brianrabern.net/munro.png"
          }
          alt=""
          key={climb.id}
          style={{ maxHeight: "100px" }}
        />
      </figure>
    </div>
  );
}
