function ErrorNotification({ message, handleClick }) {
  return (
    <div className="alert alert-warning shadow-lg">
      {message}
      <button onClick={handleClick} className="btn btn-sm">
        Ok
      </button>
    </div>
  );
}

export default ErrorNotification;
