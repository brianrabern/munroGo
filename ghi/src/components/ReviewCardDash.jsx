import React from "react";
import { formatDistance, formatRelative } from "date-fns";
import { useGetMunrosQuery } from "../services/munros";

export default function ReviewCard({ review }) {
  const date = formatRelative(new Date(review.date), new Date(), {
    addSuffix: true,
  });
  const { data } = useGetMunrosQuery();
  function getMunroName(munros, munroId) {
    for (let i = 0; i < munros.length; i++) {
      if (munros[i].id === munroId) {
        return munros[i].hillname;
      }
    }
    return null;
  }

  return (
    <div className="card w-96 bg-base-300 text-[#737a7e]">
      <div className="card-body">
        <div className="rating">
          {review.rating >= 1 && (
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-warning"
              key={review.rating}
              checked={review.rating === 1}
              disabled
            />
          )}
          {review.rating >= 2 && (
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 1}
              checked={review.rating === 2}
              disabled
            />
          )}
          {review.rating >= 3 && (
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 2}
              checked={review.rating === 3}
              disabled
            />
          )}
          {review.rating >= 4 && (
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 3}
              checked={review.rating === 4}
              disabled
            />
          )}
          {review.rating >= 5 && (
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-warning"
              key={review.rating + 4}
              checked={review.rating === 5}
              disabled
            />
          )}
        </div>
        <h2 className="card-title">{getMunroName(data, review.munro_id)}</h2>
        <p className="italic">"{review.comment}"</p>
        <p className="font-bold text-right">{review.full_name}</p>
        <p className="text-right">{date}</p>
      </div>
    </div>
  );
}
