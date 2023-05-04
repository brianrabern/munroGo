import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDateChange,
  handleDurationChange,
  handleDifficultyChange,
  handleWeatherChange,
  handleNotesChange,
  handleImageUpload,
  reset,
} from "../../features/climbs/newClimbSlice";
import { useGetMunrosQuery } from "../../services/munros";
import { useCreateClimbMutation } from "../../services/climbs";
import { handleOpenCloseModal } from "../../features/modal/modalSlice";
import Modal from "../Modal";
import { Buffer } from "buffer";

const NewClimb = () => {
  const isNewClimbOpen = useSelector((state) => state.modal.isNewClimbOpen);
  const munroId = useSelector((state) => state.modal.munroId);
  const dispatch = useDispatch();
  const [createClimb] = useCreateClimbMutation();
  const newClimb = useSelector((state) => state.newClimb);
  const fields = newClimb.fields;
  const { data: munros, isLoading } = useGetMunrosQuery();

  if (isLoading) return <div>Loading...</div>;

  let climb = {
    munro_id: munroId,
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
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const binaryData = new Uint8Array(reader.result);
      const base64Data = Buffer.from(binaryData).toString("base64");
      dispatch(handleImageUpload(base64Data));
    };
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
        open={isNewClimbOpen}
        handleClose={() => dispatch(handleOpenCloseModal("isNewClimbOpen"))}
        label="Add a climb"
        id="Climb"
      >
        {" "}
        <h4 className="text-center pb-5">
          Add climb of {getMunroName(munros, munroId)}{" "}
        </h4>
        <form
          className="flex flex-col items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            createClimb(climb);
            dispatch(handleOpenCloseModal("isNewClimbOpen"));
            dispatch(reset());
          }}
        >
          <div>
            <input
              type="datetime-local"
              className="textarea textarea-bordered h-12 w-full"
              id="datetime__field"
              placeholder="Date"
              tabIndex={2}
              value={fields.datetime}
              onChange={(e) => {
                dispatch(handleDateChange(e.target.value));
              }}
            />
          </div>

          <textarea
            type="text"
            className="textarea textarea-bordered h-12 w-3/4"
            placeholder="Duration"
            tabIndex={4}
            value={fields.duration}
            onChange={(e) => {
              dispatch(handleDurationChange(e.target.value));
            }}
          ></textarea>
          <textarea
            type="text"
            className="textarea textarea-bordered h-12 w-3/4"
            placeholder="Weather"
            tabIndex={5}
            value={fields.weather}
            onChange={(e) => {
              dispatch(handleWeatherChange(e.target.value));
            }}
          ></textarea>
          <textarea
            type="text"
            className="textarea textarea-bordered h-24 w-3/4"
            id="notes__field"
            placeholder="Notes"
            tabIndex={6}
            value={fields.notes}
            onChange={(e) => {
              dispatch(handleNotesChange(e.target.value));
            }}
          ></textarea>
          <div className="rating">
            {" "}
            Difficulty:
            <div className="px-2">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-triangle bg-darkgreen hover:bg-lightgreen"
                checked={fields.difficulty === 1}
                value={1}
                onChange={(e) => {
                  dispatch(handleDifficultyChange(parseInt(e.target.value)));
                }}
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-triangle bg-darkgreen hover:bg-lightgreen"
                checked={fields.difficulty === 2}
                value={2}
                onChange={(e) => {
                  dispatch(handleDifficultyChange(parseInt(e.target.value)));
                }}
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-triangle bg-darkgreen hover:bg-lightgreen"
                checked={fields.difficulty === 3}
                value={3}
                onChange={(e) => {
                  dispatch(handleDifficultyChange(parseInt(e.target.value)));
                }}
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-triangle bg-darkgreen hover:bg-lightgreen"
                checked={fields.difficulty === 4}
                value={4}
                onChange={(e) => {
                  dispatch(handleDifficultyChange(parseInt(e.target.value)));
                }}
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-triangle bg-darkgreen hover:bg-lightgreen"
                checked={fields.difficulty === 5}
                value={5}
                onChange={(e) => {
                  dispatch(handleDifficultyChange(parseInt(e.target.value)));
                }}
              />
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              id="image__field"
              placeholder="Photo"
              tabIndex={7}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
          {` `}
        </form>
      </Modal>
    </>
  );
};

export default NewClimb;
