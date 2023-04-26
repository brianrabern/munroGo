import React from "react";
import { useGetReviewsQuery } from "../services/revs";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { data: myReviews, isLoading } = useGetReviewsQuery();

  if (isLoading) return <div>Loading...</div>;
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
