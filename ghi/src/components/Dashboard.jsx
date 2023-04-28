import React, { useState, useEffect } from "react";
import { useGetAccountQuery } from "../services/auth";
import { useGetMunrosQuery } from "../services/munros";
import { useGetClimbsQuery } from "../services/climbs";
import { useGetReviewsQuery } from "../services/revs";
import LoadingBar from "./LoadingBar";
import MapComp from "./MapComp";
import ClimbCard from "./ClimbCard";
import ReviewCardDash from "./ReviewCardDash";
import Select from "react-select";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data, isLoading: isLoadingMunros } = useGetMunrosQuery();
  const { data: account, isLoading: isLoadingAccount } = useGetAccountQuery();
  const { data: myClimbs, isLoading: isLoadingClimbs } = useGetClimbsQuery();
  const { data: myReviews, isLoading: isLoadingReviews } = useGetReviewsQuery();
  const [markers, setMarkers] = useState([]);
  const [selectedMunro, setSelectedMunro] = useState("");

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
  const handleChange = (selectedOption) => {
    handleMunroSelected(selectedOption);
  };
  const handleMunroSelected = (munro) => {
    window.location.href = `/munros/${munro.value}/add-climb`;
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

  if (
    isLoadingMunros ||
    isLoadingAccount ||
    isLoadingClimbs ||
    isLoadingReviews
  )
    return <LoadingBar increment={20} interval={50} />;

  const climbsList = myClimbs.map((climb) => climb.munro_id);

  const munroOptions = data.map((munro) => ({
    label: munro.hillname,
    value: munro.id,
    key: munro.id,
  }));

  const getClimbedMunros = (data, climbsList) => {
    return data.filter((munro) => climbsList.includes(munro.id));
  };

  const climbedMunros = getClimbedMunros(data, climbsList);

  const percentDone = Math.round((climbedMunros.length / 282) * 100);
  const todoMunros = 282 - climbedMunros.length;

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
        <div className="flex flex-col">
          <div className="flex items-stretch h-full justify-center gap-6">
            {/* First Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center">
                  <div className="stat-value py-2 text-center">My Climbs</div>
                </div>
                <div className="h-96 carousel carousel-vertical max-w-md p-4 space-x-4 bg-base-300 rounded-box">
                  {myClimbs.map((climb) => (
                    <div key={climb.id}>
                      <div className="carousel-item h-full">
                        <ClimbCard climb={climb} />
                      </div>
                      <div className="divider"></div>
                    </div>
                  ))}
                </div>
                <Link
                  to={{ pathname: "/my-climbs" }}
                  className="stat-desc text-accent text-center"
                >
                  See all
                </Link>
                <div className="flex justify-center items-center gap-6 py-5 z-50">
                  <Select
                    value={selectedMunro}
                    onChange={handleChange}
                    options={munroOptions}
                    className="block w-40 text-sm rounded-md dark:text-gray-400"
                    menuPlacement="auto"
                    placeholder="Add a climb..."
                    components={{
                      DropdownIndicator: () => <span />,
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
              <div className="card-body items-center">
                <div className="stats bg-base-300">
                  <div className="stat items-center">
                    <div className="stat-value mb-3 text-center">Rank: </div>
                    <img
                      src="https://blog.fitbit.com/wp-content/uploads/2017/07/Badges_Daily_10000_Steps.png"
                      style={{ maxHeight: "250px" }}
                    />
                    <div className="stat-value py-2 text-center">Beginner</div>
                    <div className="stat-desc py-2 text-lg text-center">
                      <h3>Total Climbs Completed: {myClimbs.length}</h3>
                      <div className="stat-value">{percentDone}%</div>
                      <div className="stat-title">Munros bagged</div>
                      <div className="stat-desc text-secondary">
                        {todoMunros} remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="card w-96 bg-base-300 shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center">
                  <div className="stat-value py-2 text-center">My Reviews</div>
                </div>
                <div className="h-96 carousel carousel-vertical max-w-md p-4 space-x-4 bg-base-300 rounded-box">
                  {myReviews.map((review) => (
                    <div key={review.id}>
                      <div className="carousel-item">
                        <ReviewCardDash review={review} />
                      </div>
                      <div className="divider"></div>
                    </div>
                  ))}
                </div>
                <Link
                  to={{ pathname: "/my-reviews" }}
                  className="stat-desc text-accent text-center"
                >
                  See all
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-x">
            <h1 className="text-center font-bold text-gray-500 text-3xl py-10">
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {climbedMunros.map((munro) => {
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
