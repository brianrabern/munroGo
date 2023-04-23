import { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label htmlFor="my-modal" className="btn">
        open modal
      </label>

      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      <div className="modal">
        <div className="modal-box">
          {props.children} {/* The child components go here */}
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
