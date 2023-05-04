import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewClimbOpen: false,
  isNewReviewOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpenCloseModal: (state, action) => {
      const prevState = state[action.payload];
      state[action.payload] = !prevState;
    },
  },
});

export const { handleUsernameChange } = modalSlice.actions;

export default modalSlice.reducer;
