import React, { useState, useEffect } from "react";
import { useGetAccountQuery } from "../services/auth";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import ClimbCard from "./ClimbCard";
import { useGetReviewsQuery } from "../services/revs";
import { formatRelative } from "date-fns";
import MapComp from "./MapComp";

const Dashboard = () => {
  const { data, isLoading } = useGetMunrosQuery();
  const { data: account } = useGetAccountQuery();
  const { data: myClimbs } = useGetClimbsQuery();
  const { data: myReviews } = useGetReviewsQuery();
  const [markers, setMarkers] = useState([]);

  const center = {
    lat: 57.1,
    lng: -4.1826492694,
  };
  const zoom = 7.9;
  const width = "100%";
  const height = "600px";

  const handleClick = (munro) => {
    window.location.href = `/munros/${munro.id}`;
  };

  useEffect(() => {
    if (data) {
      const climbsList = myClimbs.map((climb) => climb.munro_id);
      const newMarkers = data.map((munro) => {
        if (climbsList.includes(munro.id)) {
          return {
            id: munro.id,
            position: {
              lat: Number(munro.latitude),
              lng: Number(munro.longitude),
            },
            title: munro.hillname,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/pal4/icon60.png",
            },
          };
        } else {
          return {
            id: munro.id,
            position: {
              lat: Number(munro.latitude),
              lng: Number(munro.longitude),
            },
            title: munro.hillname,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/pal4/icon52.png",
            },
          };
        }
      });

      setMarkers(newMarkers);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[#adb9c0] text-3xl font-medium text-center">
          Birl awa', bide a blink...
        </p>
      </div>
    );
  const climbsList = myClimbs.map((climb) => climb.munro_id);

  const selectClimbedMunroNames = (data, climbsList) => {
    const climbedMunros = data.filter((munro) => climbsList.includes(munro.id));

    return climbedMunros;
  };

  function getMunroName(munros, munroId) {
    for (let i = 0; i < munros.length; i++) {
      if (munros[i].id === munroId) {
        return munros[i].hillname;
      }
    }
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 px-20">
        <h5
          hidden
          className="text-2xl text-gray-600 font-medium lg:block pt-10 text-center"
        >
          {account.full_name}'s Dashboard
        </h5>
        <MapComp
          center={center}
          zoom={zoom}
          markers={markers}
          width={width}
          height={height}
          handleClick={handleClick}
        />
        <div className="2xl:container">
          <div className="grid grid-flow-col auto-cols-max gap-6">
            <div className="">
              {/* <div className="flex flex-col bg-white border rounded p-4"> */}
              {/* First Card */}
              <div className="card w-96 h-full bg-base-300 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-center items-center">
                    <h2 className="text-3xl card-title font-bold text-center">
                      Climbs
                    </h2>
                  </div>
                  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-300 rounded-box">
                    {myClimbs.map((climb) => (
                      <div key={climb.id} className="carousel-item">
                        <ClimbCard key={climb.id} climb={climb} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="rounded-box">
              {/* <div className="flex flex-col bg-white border rounded p-4"> */}
              <div className="card h-full w-96 bg-base-300 shadow-xl">
                <div className="card-body items-center">
                  <h2 className="card-title"></h2>
                  <div className="stats bg-base-300">
                    <div className="stat items-center">
                      <div className="stat-value py-2 text-center">Rank:</div>
                      <img
                        src="https://blog.fitbit.com/wp-content/uploads/2017/07/Badges_Daily_10000_Steps.png"
                        style={{ maxHeight: "250px" }}
                      />
                      {/* <div className="stat-value py-2 text-center">Rank:</div> */}
                      <div className="stat-value py-2 text-center">
                        Beginner
                      </div>
                      <div className="stat-desc py-2 text-lg text-center">
                        <h3>Total Climbs Completed: {myClimbs.length}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="">
              {/* <div className="flex flex-col bg-white border rounded p-4"> */}
              <div className="card h-full w-96 bg-base-300 shadow-xl">
                <div className="card-body">
                  <div className="flex justify-center items-center">
                    <h2 className="text-3xl card-title font-bold text-center">
                      Reviews
                    </h2>
                  </div>
                  {/* <h2 className="card-title">Reviews</h2> */}
                  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-300 rounded-box">
                    {myReviews.map((review) => (
                      <div key={review.id} className="carousel-item">
                        <div className="card w-96 bg-base-300">
                          <div className="card-body">
                            <h2 className="card-title">
                              {getMunroName(data, review.munro_id)}
                            </h2>
                            <p className="text-lg">
                              {formatRelative(
                                new Date(review.date),
                                new Date(),
                                {
                                  addSuffix: true,
                                }
                              )}
                            </p>
                            <p className="text-lg">Name: {review.full_name}</p>
                            <p className="text-lg">Comment: {review.comment}</p>
                            <p className="text-lg">Rating: {review.rating} </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x">
            <h1 className="text-center font-bold text-gray-500 text-3xl py-3">
              Munros Bagged
            </h1>
            <table className="table table-compact w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Hillname
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Region
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Metres
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Feet
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Longitude
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Latitude
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {selectClimbedMunroNames(data, climbsList).map((munro) => {
                  return (
                    <tr key={munro.id}>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.hillname}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.region}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.metres}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.feet}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.longitude}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {munro.latitude}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
