import React from "react";
import { useDeleteReviewMutation, useGetReviewsQuery } from "../services/revs";
import LoadingBar from "./LoadingBar";
import ReviewCardDash from "./ReviewCardDash";

const Reviews = () => {
  const { data: myReviews, isLoading } = useGetReviewsQuery();
  const [deleteReview] = useDeleteReviewMutation();

  if (isLoading) return <LoadingBar increment={20} interval={50} />;
  if (myReviews?.length === 0) return <div>No reviews</div>;

  return (
    <>
      <h1 className="text-2xl font-bold text-center py-5">My Reviews </h1>
      <div className="flex flex-col-3 flex-wrap justify-center gap-3">
        {myReviews.map((review) => (
          <div key={review.id} className="bg-base-300 rounded-box p-4">
            <ReviewCardDash review={review} />
            <div className="divider"></div>
            <div className="flex justify-center">
              <button
                className="btn btn-xs btn-error"
                onClick={() => deleteReview(review.id)}
              >
                Remove Climb
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
