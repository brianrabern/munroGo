import React from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import ClimbCard from "./ClimbCard";

const Climbs = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: myClimbs } = useGetClimbsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (myClimbs?.length === 0) return <div>You bum</div>;

  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {myClimbs.map((climb) => (
          <div key={climb.id} className="carousel-item">
            <ClimbCard key={climb.id} climb={climb} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Climbs;
