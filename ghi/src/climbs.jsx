import React from "react";
import { useGetMunrosQuery, useGetClimbsQuery } from "./services/munros";
import { useGetAccountQuery } from "./services/auth";
import { Buffer } from "buffer";
// import Progress from "./Progress";

const ClimbedMunros = () => {
  const { data: account } = useGetAccountQuery();
  const { data, isLoading } = useGetMunrosQuery();
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
      {/* {myClimbs.map((climb) => {
        let base64String = climb.image;
        let decodedData = Buffer.from(base64String, "base64");
        let imageUrl = `data:image/jpeg;base64,${decodedData.toString(
          "base64"
        )}`;
        let newImage = new Image();
        newImage.src = imageUrl;
        <img scr={newImage} />;
      })} */}

      {/* <Progress
        progData={[
          { key: 1, name: "A", value: 80, color: "#ff0000" },
          { key: 2, name: "B", value: 45, color: "#00ff00" },
          { key: 3, name: "C", value: 25, color: "#0000ff" },
        ]}
        cx={150}
        cy={200}
        iR={50}
        oR={100}
        value={50}
      >
        {" "}
      </Progress> */}
    </>
  );
};

export default ClimbedMunros;
