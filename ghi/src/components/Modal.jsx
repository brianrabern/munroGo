function Modal(props) {
  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        className="modal-toggle"
        checked={props.open}
        onChange={props.handleClose}
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
