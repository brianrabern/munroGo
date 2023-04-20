import { createSlice } from "@reduxjs/toolkit";
import { Buffer } from "buffer";

const initialState = {
  fields: {
    datetime: "",
    duration: "",
    difficulty: "",
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

    // handleImageUpload: (state, action) => {
    //   const reader = new FileReader();
    //   const file = action.payload;

    //   // read image file as array buffer
    //   reader.readAsArrayBuffer(file);

    //   reader.onload = () => {
    //     // convert array buffer to binary data
    //     const binaryData = new Uint8Array(reader.result);
    //     console.log(binaryData);
    //     // update state with binaryData
    //     state.fields.image = binaryData;
    //   };
    // },

    // handleImageUpload: (state, action) => {
    //   const file = action.payload;
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     const binaryData = new Uint8Array(reader.result);
    //     state.fields.image = binaryData;
    //   };

    //   reader.onerror = () => {
    //     state.errorMessage = "Error loading image";
    //   };

    //   if (file) {
    //     reader.readAsArrayBuffer(file);
    //   } else {
    //     state.fields.image = null;
    //   }
    // },

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
