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
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{munro.hillname}</h2>
        <p>{date}</p>
        <p>Difficulty: {climb.difficulty}</p>
        <p>Duration: {climb.duration}</p>
        <p>Notes: {climb.notes}</p>
        <p>Weather: {climb.weather}</p>
      </div>
      <figure>
        <img
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

    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className="px-10 pt-10">
    //     <img
    //       src={
    //         climb.image
    //           ? `data:image/png;base64,${climb.image}`
    //           : "https://brianrabern.net/munro.png"
    //       }
    //       alt=""
    //       key={climb.id}
    //       className="rounded-xl"
    //     />
    //   </figure>
    //   <div className="card-body items-center text-center">
    //     <h2 className="card-title">{munro.hillname}</h2>
    //     <p>{date}</p>
    //     <p>Difficulty: {climb.difficulty}</p>
    //     <p>Duration: {climb.duration}</p>
    //     <p>Notes: {climb.notes}</p>
    //     <p>Weather: {climb.weather}</p>
    //   </div>
    // </div>
  );
}

{
  /* <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={`data:image/png;base64,${climb.image}`}
      alt=""
      key={climb.id}
      className="rounded-xl"
    />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{munro.hillname}</h2>
    <p>{date}</p>
    <p>Difficulty: {climb.difficulty}</p>
    <p>Duration: {climb.duration}</p>
    <p>Notes: {climb.notes}</p>
    <p>Weather: {climb.weather}</p>
  </div>
</div>; */
}
