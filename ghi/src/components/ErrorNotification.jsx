function ErrorNotification(props) {
  return <div className="alert alert-danger">{props.children}</div>;
}

export default ErrorNotification;
