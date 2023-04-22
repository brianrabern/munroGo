import React from "react";
import { useGetReviewsQuery } from "../services/review";

const ReviewsByAccount = () => {
  const { data, isLoading } = useGetReviewsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (data?.length === 0) return <div>No reviews</div>;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th key="datetime">Comment</th>
          <th key="duration">Rating</th>
          <th key="difficulty">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((reviews) => {
          return (
            <tr key={reviews.id}>
              <td>{reviews.comment}</td>
              <td>{reviews.rating}</td>
              <td>{reviews.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReviewsByAccount;
