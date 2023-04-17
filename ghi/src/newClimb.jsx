import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleIDChange,
  handleDateChange,
  handleDurationChange,
  handleDifficultyChange,
  handleWeatherChange,
  handleNotesChange,
  reset,
} from "./features/climbs/newClimbSlice";
import { useCreateClimbMutation } from "./services/munros";

const NewClimb = () => {
  const dispatch = useDispatch();
  const [createClimb] = useCreateClimbMutation();
  const newClimb = useSelector((state) => state.newClimb);
  const fields = newClimb.fields;
  // console.log(createClimb);
  // console.log("---------:", newClimb);
  // console.log("fields:", newClimb.fields);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createClimb(fields);
        dispatch(reset());
      }}
    >
      <div className="mb-3">
        <label htmlFor="id__field" className="form-label">
          Munro ID
        </label>
        <input
          type="text"
          className="form-control"
          id="id__field"
          placeholder="Munro ID"
          tabIndex={1}
          value={fields.munro_id}
          onChange={(e) => {
            dispatch(handleIDChange(e.target.value));
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="datetime__field" className="form-label">
          Date
        </label>
        <input
          type="text"
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
      <div className="mb-3">
        <label htmlFor="difficulty__field" className="form-label">
          Difficulty
        </label>
        <input
          type="number"
          className="form-control"
          id="difficulty__field"
          placeholder="Difficulty"
          tabIndex={4}
          value={fields.difficulty}
          onChange={(e) => {
            dispatch(handleDifficultyChange(e.target.value));
          }}
        />
      </div>
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
        <input
          type="text"
          className="form-control"
          id="notes__field"
          placeholder="Notes"
          tabIndex={6}
          value={fields.notes}
          onChange={(e) => {
            dispatch(handleNotesChange(e.target.value));
          }}
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
  );
};

export default NewClimb;
