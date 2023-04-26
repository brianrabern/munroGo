import React from "react";
import { formatDistance, formatRelative } from "date-fns";

export default function ReviewCard({ review }) {
  const date = formatRelative(new Date(review.date), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="card w-96 bg-neutral-50 text-[#737a7e]">
      <div className="card-body">
        <h2 className="card-title">{review.hillname}</h2>
        <p>Rating: {review.rating} </p>
        <p>{review.comment}</p>
        <p className="font-bold text-right">{review.full_name}</p>
        <p className="text-right">{date}</p>
      </div>
    </div>
  );
}
