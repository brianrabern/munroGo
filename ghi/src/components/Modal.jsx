import { useState } from "react";

function Modal({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label htmlFor="my-modal" className="btn">
        {content}
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
          {props.children}
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
