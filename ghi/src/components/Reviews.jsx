import React from "react";
import { useGetReviewsQuery } from "../services/revs";
import ReviewCard from "./ReviewCard"

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
    // <table className="table table-striped">
    //   <thead>
    //     <tr>
    //       <th key="datetime">Comment</th>
    //       <th key="duration">Rating</th>
    //       <th key="difficulty">Date</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((reviews) => {
    //       return (
    //         <tr key={reviews.id}>
    //           <td>{reviews.comment}</td>
    //           <td>{reviews.rating}</td>
    //           <td>{reviews.date}</td>
    //         </tr>
    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};

export default Reviews;
