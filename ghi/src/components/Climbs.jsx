import React from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import { useGetAccountQuery } from "../services/auth";
import ClimbCard from "./ClimbCard";

const Climbs = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: account } = useGetAccountQuery();
  const { data: myClimbs } = useGetClimbsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (myClimbs?.length === 0) return <div>You bum</div>;

  console.log(myClimbs);

  return (
    <>
      <h2>My climbs </h2>
      <div className="flex">
        {myClimbs.map((climb) => (
          <ClimbCard climb={climb} />
        ))}
      </div>

      {/* <p>
        {account.full_name}, {account.rank}
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th key="hillname">Hillname</th>
          </tr>
        </thead>
        <tbody>
          {filtered_data.map((munro, index) => {
            return (
              <tr key={index}>
                <td>{munro}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {myClimbs.map((climb) => {
        return (
          <img
            src={`data:image/png;base64,${climb.image}`}
            alt=""
            width="100"
            height="100"
            key={climb.id}
          />
        );
      })} */}
    </>
  );
};

export default Climbs;
