import React from "react";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import { useGetAccountQuery } from "../services/auth";

const Climbs = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: account } = useGetAccountQuery();
  const { data: myClimbs } = useGetClimbsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (myClimbs?.length === 0) return <div>You bum</div>;

  const climbsList = myClimbs.map((climb) => climb.munro_id);

  const selectClimbedMunroNames = (data, climbsList) => {
    const climbedMunros = data.filter((munro) => climbsList.includes(munro.id));
    const climbedMunroNames = climbedMunros.map((munro) => munro.hillname);
    return climbedMunroNames;
  };

  const filtered_data = selectClimbedMunroNames(data, climbsList);

  return (
    <>
      <h2>My climbs </h2>
      <p>
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
      })}
    </>
  );
};

export default Climbs;
