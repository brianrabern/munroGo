import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetMunroDetailQuery } from "../services/munros";
import { useGetReviewsForMunroQuery } from "../services/revs";
import Modal from "./Modal";
import MapComp from "./MapComp";
import NewReview from "./NewReview";
import ReviewCard from "./ReviewCard";

const MunroDetail = () => {
  const { munro_id } = useParams();
  const { data, isLoading } = useGetMunroDetailQuery(munro_id);
  const { data: reviews, isLoading: isLoadingReviews } =
    useGetReviewsForMunroQuery(munro_id);

  if (isLoading || isLoadingReviews) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-[#adb9c0] text-3xl font-medium text-center">
          Birl awa', bide a blink...
        </p>
      </div>
    );
  }

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
  let height = "350px";
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
    <>
      <div className="flex min-h-screen pt-[30px] px-[40px] bg-gray-500">
        <div className="min-w-full">
          <h1 className="text-[#ffffff] text-[50px] leading-[40px] font-semibold text-center">
            {data.hillname}
          </h1>
          <div className="mt-[20px] grid grid-cols-2 gap-[20px]">
            <div
              key="1"
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div>
                  <div className="text-[#121111] text-[50px] leading-[63px] font-bold">
                    <img
                      className="w-[100%]"
                      src={filterImages(data.images)[0]}
                      alt={data.hillname}
                    ></img>
                  </div>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium py-2">
                    Summit: {data.metres} meters
                  </p>
                </div>
              </div>

              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Current conditions: {data.weather.weather[0].description}
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Current temperature:{" "}
                    {Math.floor((data.weather.main.temp - 273.15) * 1.8 + 32)}
                    &#176;F
                  </p>
                </div>
              </div>
            </div>

            <div
              key="2"
              className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y"
            >
              <div className="pt-[15px] px-[25px] pb-[25px]">
                <div>
                  <div className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                    <MapComp
                      center={center}
                      zoom={zoom}
                      markers={markers}
                      width={width}
                      height={height}
                      handleClick={handleClick}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[#717F87] text-[18px] leading-[28px] font-medium py-3">
                    {region_names[data.region.slice(0, -1)]}
                  </p>
                </div>
              </div>
              <div className="pt-[25px] px-[25px] pb-[35px]">
                <div>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Longitude: {data.longitude}
                  </p>
                  <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                    Latitude: {data.latitude}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            key="3"
            className="w-full bg-[#fff] rounded-[10px] shadow-[0px 1px 2px #E1E3E5] border border-[#E1E3E5] divide-y gap-[20px] mt-[20px]"
          >
            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div className="flex justify-left">
                <div className="bg-[#F6F6F7] rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Information
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium text-justify py-2">
                  {data.summary}
                </p>
                <div className="flex justify-center py-5">
                  <Modal label="Add review">
                    <NewReview />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid place-items-center py-7 gap-7 md:grid-cols-2 lg:grid-cols-3  bg-gray-500">
        {/* First Card */}
        {reviews.map((review) => (
          <div key={review.id}>
            <ReviewCard key={review.id} review={review} />
          </div>
        ))}
        {/* </div> */}
        {/* </div> */}
      </div>

      {/* </div> */}
    </>
  );
};
export default MunroDetail;

{
  /* <div className="justify-center">
  <Link type="button" className="btn btn-active" to={"add-climb"}>
    Climbed{" "}
  </Link>{" "}
  <Link type="button" className="btn btn-active" to="add-review">
    Add Review{" "}
  </Link>
</div>; */
}
