import React from "react";
import { useParams } from "react-router-dom";
import { useGetMunroDetailQuery } from "./services/munrodetail";
import MapComp from "./MapComp";
import { Link } from "react-router-dom";

const Munro = () => {
  const { munro_id } = useParams();
  const { data, isLoading } = useGetMunroDetailQuery(munro_id);

  if (isLoading) return <div>Loading...</div>;

  //map stuff
  let center = {
    lat: Number(data.latitude),
    lng: Number(data.longitude),
  };
  let zoom = 8;
  let markers = [
    {
      id: data.id,
      position: {
        lat: Number(data.latitude),
        lng: Number(data.longitude),
      },
      title: data.hillname,
    },
  ];
  let width = "100%";
  let height = "400px";
  const handleClick = () => {};

  const region_names = {
    "01": "Firth of Clyde to Strathtay",
    "02": "Loch Rannoch to Loch Tay",
    "03": "Loch Leven to Glen Lochy",
    "04": "Fort William to Loch Ericht",
    "05": "Loch Ericht to Glen Garry",
    "06": "Forest of Atholl to Blairgowrie",
    "07": "Braemar to Montrose",
    "08": "The Cairngorms",
    "09": "Spean Bridge to Elgin",
    10: "Glen Shiel to Glenfinnan",
    11: "Loch Duich to Loch Ness",
    12: "Kyle of Lochalsh to Inverness",
    13: "Loch Carron to Loch Maree",
    14: "Loch Maree to Garve",
    15: "Ullapool to the Moray Firth",
    16: "The Far North",
    17: "Skye and Mull",
  };

  function filterImages(images) {
    let filteredImages = [];
    for (let i = 0; i < images.length; i++) {
      if (images[i].endsWith(".jpg")) {
        filteredImages.push(images[i]);
      }
    }
    if (filteredImages.length === 0) {
      filteredImages.push(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/McCulloch_Horatio_Loch_Lomond.jpg/2560px-McCulloch_Horatio_Loch_Lomond.jpg"
      );
    }
    return filteredImages;
  }

  return (
    <div classclassName="flex min-h-screen pt-[30px] px-[40px]">
      <h1>
        <Link type="button" className="btn btn-success" to="/dashboard">
          {" "}
          Dashboard{" "}
        </Link>
      </h1>
      <h1>
        <Link type="button" className="btn btn-success" to="/munros">
          {" "}
          Munros{" "}
        </Link>
      </h1>
      <div className="min-w-full">
        <h1
          className="text-[#00153B] text-[20px] leading-[40px] font-semibold"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {data.hillname}
        </h1>

        <div className="mt-[20px] grid grid-cols-2 gap-[20px]">
          <div
            key="1"
            className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
          >
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]"></div>
              </div>

              <div
                style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  <h1
                    className="text-[#00153B] text-[20px] leading-[40px] font-semibold"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    Information
                  </h1>
                  <img
                    src={filterImages(data.images)[0]}
                    // className="object-center"
                    alt={data.hillname}
                  ></img>
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  {region_names[data.region.slice(0, -1)]}
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  {data.metres} meters
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  {data.summary}
                </p>
              </div>
            </div>
          </div>

          <div
            key="3"
            className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
          >
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Pro
                  </p>
                </div>
              </div>

              <div>
                <h1
                  className="text-[#00153B] text-[20px] leading-[40px] font-semibold"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Map
                </h1>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  <MapComp
                    center={center}
                    zoom={zoom}
                    markers={markers}
                    width={width}
                    height={height}
                    handleClick={handleClick}
                  />
                </p>
              </div>

              <div></div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  {data.weather.weather[0].description}
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  {Math.floor((data.weather.main.temp - 273.15) * 1.8 + 32)}
                  &#176;F
                </p>
              </div>

              <div className="mt-[25px] flex space-x-4">
                <button className="bg-moss-green rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">
                  <Link type="button" className="btn btn-success" to="climbs/">
                    Add Climbs{" "}
                  </Link>{" "}
                </button>
                <button className="bg-moss-green rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold">
                  <Link type="button" className="btn btn-success" to="reviews/">
                    Add Reviews{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Munro;
