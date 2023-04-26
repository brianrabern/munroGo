import { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label htmlFor={props.id} className="btn">
        {props.label}
      </label>

      <input
        type="checkbox"
        id={props.id}
        className="modal-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />

      <div className="modal">
        <div className="modal-box">
          {props.children}
          <div className="modal-action">
            <label htmlFor={props.id} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
