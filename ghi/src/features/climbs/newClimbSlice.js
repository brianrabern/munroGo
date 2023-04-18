import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fields: {
    datetime: "",
    duration: "",
    difficulty: "",
    weather: "",
    notes: "",
  },
  errorMessage: null,
};

export const newClimbSlice = createSlice({
  name: "newClimb",
  initialState,
  reducers: {
    // handleIDChange: (state, action) => {
    //   state.fields.munro_id = action.payload;
    // },
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
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {
  // handleIDChange,
  handleDateChange,
  handleDurationChange,
  handleDifficultyChange,
  handleWeatherChange,
  handleNotesChange,
  error,
  reset,
} = newClimbSlice.actions;

export default newClimbSlice.reducer;
