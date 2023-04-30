import React from "react";
// import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import { useDeleteClimbMutation } from "../services/climbs";
import LoadingBar from "./LoadingBar";
import ClimbCard from "./ClimbCard";

const Climbs = () => {
  const { data: myClimbs, isLoading } = useGetClimbsQuery();
  const [deleteClimb] = useDeleteClimbMutation();
  if (isLoading) return <LoadingBar increment={20} interval={50} />;
  if (myClimbs?.length === 0)
    return (
      <div className="flex justify-center items-center h-screen text-8xl">
        You bum
      </div>
    );

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-5">My Climbs</h1>
      <div className="flex flex-col-3 flex-wrap justify-center gap-3">
        {myClimbs.map((climb) => (
          <div key={climb.id} className="bg-base-300 rounded-box p-4">
            <ClimbCard climb={climb} />
            <div className="divider"></div>
            <div className="flex justify-center">
              <button
                className="btn btn-xs btn-error"
                onClick={() => deleteClimb(climb.id)}
              >
                Remove Climb
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Climbs;
