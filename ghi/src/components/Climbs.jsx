import React from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import ClimbCard from "./ClimbCard";

const Climbs = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: myClimbs } = useGetClimbsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (myClimbs?.length === 0) return <div>You bum</div>;

  console.log(myClimbs);

  return (
    <>
      <h1>My climbs </h1>
      <div className="flex gap-3 px-6 justify-center">
        {myClimbs.map((climb) => (
          <ClimbCard key={climb.id} climb={climb} />
        ))}
      </div>
    </>
  );
};

export default Climbs;
