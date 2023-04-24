import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {
    comment: "",
    rating: "",
  },
  errorMessage: null,
};

export const newReviewSlice = createSlice({
  name: "newReview",
  initialState,
  reducers: {
    handleRatingChange: (state, action) => {
      state.fields.rating = action.payload;
    },
    handleCommentChange: (state, action) => {
      state.fields.comment = action.payload;
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});

export const { handleRatingChange, handleCommentChange, error, reset } =
  newReviewSlice.actions;

export default newReviewSlice.reducer;
