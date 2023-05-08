import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleRatingChange,
  handleCommentChange,
  reset,
} from "../../features/reviews/newReviewSlice";
import { useCreateReviewMutation } from "../../services/revs";
import { useGetAccountQuery } from "../../services/auth";
import { useGetMunrosQuery } from "../../services/munros";
import { handleOpenCloseModal } from "../../features/modal/modalSlice";
import Modal from "../Modal";

const NewRev = () => {
  const isNewReviewOpen = useSelector((state) => state.modal.isNewReviewOpen);
  const munroId = useSelector((state) => state.modal.munroId);
  const dispatch = useDispatch();
  const [createReview] = useCreateReviewMutation();
  const newReview = useSelector((state) => state.newReview);
  const fields = newReview.fields;
  const { data: account, isLoading } = useGetAccountQuery();
  const { data: munros, isLoading: isLoadingMunros } = useGetMunrosQuery();

  if (isLoading || isLoadingMunros) return <div>Loading...</div>;

  let review = {
    munro_id: munroId,
    body: {
      comment: fields.comment,
      rating: fields.rating,
      full_name: account?.full_name,
    },
  };

  function getMunroName(munros, munroId) {
    for (let i = 0; i < munros?.length; i++) {
      if (munros[i].id === munroId) {
        return munros[i].hillname;
      }
    }
    return null;
  }

  return (
    <>
      <Modal
        open={isNewReviewOpen}
        handleClose={() => dispatch(handleOpenCloseModal("isNewReviewOpen"))}
        label="Add a review"
        id="Review"
      >
        {" "}
        <h4 className="text-center">
          Add review of {getMunroName(munros, munroId)}
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createReview(review);
            dispatch(handleOpenCloseModal("isNewReviewOpen"));
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
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default NewRev;
