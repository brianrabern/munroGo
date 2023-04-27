import React from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import { useDeleteClimbMutation } from "../services/climbs";
import LoadingBar from "./LoadingBar";
import ClimbCard from "./ClimbCard";

const Climbs = () => {
  const { data } = useGetMunrosQuery();
  const { data: myClimbs, isLoading } = useGetClimbsQuery();
  const [deleteClimb] = useDeleteClimbMutation();
  if (isLoading) return <LoadingBar increment={20} interval={50} />;
  if (myClimbs?.length === 0) return <div>You bum</div>;

  return (
    <>
      <h1 className="text-2xl font-bold">My Climbs</h1>
      <div className="max-w-xl grid grid-cols-2 gap-5">
        {myClimbs.map((climb) => (
          <div key={climb.id} className="bg-neutral rounded-box p-4">
            <ClimbCard key={climb.id} climb={climb} />
            <div className="divider"></div>
            <div>
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
