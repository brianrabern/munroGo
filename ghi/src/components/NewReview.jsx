import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleRatingChange,
  handleCommentChange,
  reset,
} from "../features/reviews/newReviewSlice";
import { useCreateReviewMutation } from "../services/revs";
import { useGetAccountQuery } from "../services/auth";

const NewReview = () => {
  const dispatch = useDispatch();
  const [createReview] = useCreateReviewMutation();
  const newReview = useSelector((state) => state.newReview);
  const fields = newReview.fields;
  const { munro_id } = useParams();
  const { data: account, isLoading } = useGetAccountQuery();

  if (isLoading) return <div>Loading...</div>;

  let review = {
    munro_id: munro_id,
    body: {
      comment: fields.comment,
      rating: fields.rating,
      full_name: account.full_name,
    },
  };

  return (
    <>
      {" "}
      <h4 className="text-center">Add review</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createReview(review);
          dispatch(reset());
        }}
      >
        <div className="form-control py-6">
          <textarea
            type="text"
            className="textarea textarea-bordered h-24"
            id="comment__field"
            placeholder="Make a Comment"
            tabIndex={1}
            value={fields.comment}
            onChange={(e) => {
              dispatch(handleCommentChange(e.target.value));
            }}
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-warning hover:bg-lightyellow"
                  checked={fields.rating === 1}
                  value={1}
                  onChange={(e) => {
                    dispatch(handleRatingChange(parseInt(e.target.value)));
                  }}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-warning hover:bg-lightyellow"
                  checked={fields.rating === 2}
                  value={2}
                  onChange={(e) => {
                    dispatch(handleRatingChange(parseInt(e.target.value)));
                  }}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-warning hover:bg-lightyellow"
                  checked={fields.rating === 3}
                  value={3}
                  onChange={(e) => {
                    dispatch(handleRatingChange(parseInt(e.target.value)));
                  }}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-warning hover:bg-lightyellow"
                  checked={fields.rating === 4}
                  value={4}
                  onChange={(e) => {
                    dispatch(handleRatingChange(parseInt(e.target.value)));
                  }}
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-warning hover:bg-lightyellow"
                  checked={fields.rating === 5}
                  value={5}
                  onChange={(e) => {
                    dispatch(handleRatingChange(parseInt(e.target.value)));
                  }}
                />
              </div>
            </span>
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button type="submit" className="btn btn-success ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default NewReview;
