import React from "react";
import { formatRelative } from "date-fns";
import { useGetMunrosQuery } from "../services/munros";

export default function ClimbCard({ climb }) {
  const { data: munros, isLoading } = useGetMunrosQuery();
  const date = formatRelative(new Date(climb.datetime), new Date(), {
    addSuffix: true,
  });
  if (isLoading) return <div>...</div>;
  const munro = munros.find((munro) => munro.id === climb.munro_id);
  return (
    <div className="card w-96 text-[#737a7e]">
      <div className="card-body">
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
        <h2 className="card-title font-bold justify-center">
          {munro?.hillname}
        </h2>
        <p className="text-lg">{date}</p>
        <div className="flex text-lg gap-2">
          Difficulty:
          <div className="rating">
            {climb.difficulty >= 1 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-triangle bg-darkgreen"
                key={climb.difficulty}
                checked={climb.difficulty === 1}
                disabled
              />
            )}
            {climb.difficulty >= 2 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-triangle bg-darkgreen"
                key={climb.difficulty + 1}
                checked={climb.difficulty === 2}
                disabled
              />
            )}
            {climb.difficulty >= 3 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-triangle bg-darkgreen"
                key={climb.difficulty + 2}
                checked={climb.difficulty === 3}
                disabled
              />
            )}
            {climb.difficulty >= 4 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-triangle bg-darkgreen"
                key={climb.difficulty + 3}
                checked={climb.difficulty === 4}
                disabled
              />
            )}
            {climb.difficulty >= 5 && (
              <input
                type="radio"
                name="rating-2"
                className="mask mask-triangle bg-darkgreen"
                key={climb.difficulty + 4}
                checked={climb.difficulty === 5}
                disabled
              />
            )}
          </div>
        </div>
        <p className="text-lg">Duration: {climb.duration}</p>
        <p className="text-lg">Weather: {climb.weather}</p>
        <p className="text-lg">Notes: {climb.notes}</p>
      </div>
    </div>
  );
}
