import React from "react";
import { useGetReviewsQuery } from "../services/revs";
import LoadingBar from "./LoadingBar";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { data: myReviews, isLoading } = useGetReviewsQuery();

  if (isLoading) return <LoadingBar increment={20} interval={50} />;
  if (myReviews?.length === 0) return <div>No reviews</div>;

  return (
    <>
      <h1>My Reviews </h1>
      <div className="flex gap-3 px-6 justify-center">
        {myReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
