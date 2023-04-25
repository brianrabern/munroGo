import React from "react";
import { formatDistance, formatRelative } from "date-fns";

export default function ReviewCard({ review }) {
  const date = formatRelative(new Date(review.date), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="card w-96 bg-base-300">
      <div className="card-body">
        <h2 className="card-title">{review.hillname}</h2>
        <p>{date}</p>
        <p>Name: {review.full_name}</p>
        <p>Comment: {review.comment}</p>
        <p>Rating:{review.rating} </p>
      </div>
    </div>
  );
}
