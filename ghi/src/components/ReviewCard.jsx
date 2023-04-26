import React from "react";
import { formatDistance, formatRelative } from "date-fns";

export default function ReviewCard({ review }) {
  const date = formatRelative(new Date(review.date), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="card w-96 bg-base-300 text-[#737a7e]">
      <div className="card-body">
        <h2 className="card-title">{review.hillname}</h2>
        <p>{review.comment}</p>
        <p className="font-bold text-right">{review.full_name}</p>
        <p className="text-right">{date}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating"
            className="mask mask-triangle bg-green-500"
            disabled={review.rating < 1}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-triangle bg-green-500"
            disabled={review.rating < 2}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-triangle bg-green-500"
            disabled={review.rating < 3}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-triangle bg-green-500"
            disabled={review.rating < 4}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-triangle bg-green-500"
            disabled={review.rating < 5}
          />
        </div>
      </div>
    </div>
  );
}
