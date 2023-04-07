import React from "react";
import { useGetMunrosQuery, useGetClimbsQuery } from "./services/munros";
import {useGetAccountQuery} from "./services/auth";

const ClimbedMunros = () => {
  const { data: account} = useGetAccountQuery();
  const { data, isLoading } = useGetMunrosQuery();
  const { data: myClimbs} = useGetClimbsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (myClimbs?.length === 0) return <div>You bum</div>;


const climbsList = myClimbs.map(climb => climb.munro_id)

const selectClimbedMunroNames = (data, climbsList) => {
  const climbedMunros = data.filter(munro => climbsList.includes(munro.id));
  const climbedMunroNames = climbedMunros.map(munro => munro.hillname);
  return climbedMunroNames;

};

const filtered_data = selectClimbedMunroNames(data, climbsList)



  return (
    <><h2>My climbs </h2>
    <p>{account.full_name}</p>
       <table className="table table-striped">
            <thead>
                <tr>
                    <th key="hillname">Hillname</th>

                </tr>
            </thead>
            <tbody>
                {filtered_data.map(munro => {
                    return (
                      <tr key={munro}>
                            <td>{munro}</td>
                        </tr>

                    );
                })}
            </tbody>
        </table>
        </>

  );
};

export default ClimbedMunros;
