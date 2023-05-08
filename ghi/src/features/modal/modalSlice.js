import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewClimbOpen: false,
  isNewReviewOpen: false,
  munroId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpenCloseModal: (state, action) => {
      const prevState = state[action.payload];
      state[action.payload] = !prevState;
    },
    handleMunroIdChange: (state, action) => {
      state.munroId = action.payload;
    },
  },
});

export const { handleOpenCloseModal, handleMunroIdChange } = modalSlice.actions;

export default modalSlice.reducer;
