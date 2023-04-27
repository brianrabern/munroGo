import { createSlice } from "@reduxjs/toolkit";
import { Buffer } from "buffer";

const initialState = {
  fields: {
    datetime: "",
    duration: "",
    difficulty: 1,
    weather: "",
    notes: "",
    image: "",
  },
  errorMessage: null,
};

export const newClimbSlice = createSlice({
  name: "newClimb",
  initialState,
  reducers: {
    handleDateChange: (state, action) => {
      state.fields.datetime = action.payload;
    },
    handleDurationChange: (state, action) => {
      state.fields.duration = action.payload;
    },
    handleDifficultyChange: (state, action) => {
      state.fields.difficulty = action.payload;
    },
    handleWeatherChange: (state, action) => {
      state.fields.weather = action.payload;
    },
    handleNotesChange: (state, action) => {
      state.fields.notes = action.payload;
    },

    handleImageUpload: (state, action) => {
      state.fields.image = action.payload;
    },

    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  handleDateChange,
  handleDurationChange,
  handleDifficultyChange,
  handleWeatherChange,
  handleNotesChange,
  handleImageUpload,
  error,
  reset,
} = newClimbSlice.actions;

export default newClimbSlice.reducer;
