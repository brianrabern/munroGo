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
        <div className="modal-box relative">
          {props.children}

          <label
            htmlFor={props.id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            x
          </label>
        </div>
      </div>
    </>
  );
}

export default Modal;
