import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDateChange,
  handleDurationChange,
  handleDifficultyChange,
  handleWeatherChange,
  handleNotesChange,
  handleImageUpload,
  reset,
} from "../features/climbs/newClimbSlice";
import { useCreateClimbMutation } from "../services/climbs";
import { Buffer } from "buffer";

const NewClimb = () => {
  const dispatch = useDispatch();
  const [createClimb] = useCreateClimbMutation();
  const newClimb = useSelector((state) => state.newClimb);
  const fields = newClimb.fields;
  const { munro_id } = useParams();

  let climb = {
    munro_id: munro_id,
    body: {
      datetime: fields.datetime,
      duration: fields.duration,
      difficulty: fields.difficulty,
      weather: fields.weather,
      notes: fields.notes,
      image: fields.image,
    },
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // read image file as array buffer
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      //convert array buffer to base64 string
      const binaryData = new Uint8Array(reader.result);
      const base64Data = Buffer.from(binaryData).toString("base64");
      // dispatch action to update store
      dispatch(handleImageUpload(base64Data));
    };
  };

  return (
    <>
      {" "}
      <h4>Add climb</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createClimb(climb);
          dispatch(reset());
        }}
      >
        <div className="mb-3">
          <label htmlFor="datetime__field" className="form-label">
            Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="datetime__field"
            placeholder="Date"
            tabIndex={2}
            value={fields.datetime}
            onChange={(e) => {
              dispatch(handleDateChange(e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="duration__field" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="duration__field"
            placeholder="Duration"
            tabIndex={3}
            value={fields.duration}
            onChange={(e) => {
              dispatch(handleDurationChange(e.target.value));
            }}
          />
        </div>

        <div className="mb-3"></div>
        <label htmlFor="difficulty__field" className="form-label">
          Difficulty
        </label>
        <input
          type="range"
          className="form-range"
          defaultValue={fields.difficulty}
          min="0"
          max="5"
          step="1"
          id="customRange3"
          onChange={(e) => {
            dispatch(handleDifficultyChange(parseInt(e.target.value)));
          }}
        ></input>

        <div className="mb-3">
          <label htmlFor="weather__field" className="form-label">
            Weather
          </label>
          <input
            type="text"
            className="form-control"
            id="weather__field"
            placeholder="Weather"
            tabIndex={5}
            value={fields.weather}
            onChange={(e) => {
              dispatch(handleWeatherChange(e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="notes__field" className="form-label">
            Notes
          </label>
          <textarea
            type="text"
            className="form-control"
            id="notes__field"
            placeholder="Notes"
            tabIndex={6}
            rows={8}
            value={fields.notes}
            onChange={(e) => {
              dispatch(handleNotesChange(e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image__field" className="form-label">
            Add photo
          </label>
          <input
            type="file"
            className="form-control"
            id="image__field"
            placeholder="Photo"
            tabIndex={7}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
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

export default NewClimb;
