import React from "react";
import { useGetClimbsByAccountQuery } from "../services/ClimbsByAccount";

const ClimbsByAccount = () => {
  const { data, isLoading } = useGetClimbsByAccountQuery();

  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>You bum</div>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th key="datetime">Date</th>
          <th key="duration">Duration</th>
          <th key="difficulty">Difficulty</th>
          <th key="weather">Weather</th>
          <th key="notes">Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((climbs) => {
          return (
            <tr key={climbs.id}>
              <td>{climbs.datetime}</td>
              <td>{climbs.duration}</td>
              <td>{climbs.difficulty}</td>
              <td>{climbs.weather}</td>
              <td>{climbs.notes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClimbsByAccount;
