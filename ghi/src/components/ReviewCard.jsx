import React from "react";
import { formatDistance, formatRelative } from "date-fns";

export default function ReviewCard({ review }) {
  const date = formatRelative(new Date(review.date), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="card w-96 bg-base-300">
      <div className="card-body">
        <div className="rating">
          {review.rating >= 1 && (
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-warning"
              key={review.rating}
              checked={review.rating === 1}
              disabled
            />
          )}
          {review.rating >= 2 && (
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 1}
              checked={review.rating === 2}
              disabled
            />
          )}
          {review.rating >= 3 && (
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 2}
              checked={review.rating === 3}
              disabled
            />
          )}
          {review.rating >= 4 && (
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 3}
              checked={review.rating === 4}
              disabled
            />
          )}
          {review.rating >= 5 && (
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 4}
              checked={review.rating === 5}
              disabled
            />
          )}
        </div>
        <p className="italic">"{review.comment}"</p>
        <p className="font-bold text-right">{review.full_name}</p>
        <p className="text-right">{date}</p>
      </div>
    </div>
  );
}
