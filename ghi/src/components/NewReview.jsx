import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleRatingChange,
  handleCommentChange,
  reset,
} from "../features/reviews/newReviewSlice";
import { useCreateReviewMutation } from "../services/revs";

const NewReview = () => {
  const dispatch = useDispatch();
  const [createReview] = useCreateReviewMutation();
  const newReview = useSelector((state) => state.newReview);
  const fields = newReview.fields;
  const { munro_id } = useParams();

  let review = {
    munro_id: munro_id,
    body: {
      comment: fields.comment,
      rating: fields.rating,
    },
  };

  return (
    <>
      {" "}
      <h4>Add review</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createReview(review);
          dispatch(reset());
        }}
      >
        <div className="mb-3">
          <label htmlFor="comment__field" className="form-label">
            Comment
          </label>
          <textarea
            type="text"
            className="form-control"
            id="comment__field"
            placeholder="Make A Comment"
            tabIndex={1}
            value={fields.comment}
            onChange={(e) => {
              dispatch(handleCommentChange(e.target.value));
            }}
          />
        </div>

        <div className="mb-3"></div>
        <label htmlFor="rating__field" className="form-label">
          Rating
        </label>
        <input
          type="range"
          className="form-range"
          defaultValue={fields.rating}
          min="0"
          max="5"
          step="1"
          id="customRange3"
          onChange={(e) => {
            dispatch(handleRatingChange(parseInt(e.target.value)));
          }}
        ></input>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        {` `}
        <button
          className="btn btn-info"
          onClick={(e) => {
            e.preventDefault();
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default NewReview;
