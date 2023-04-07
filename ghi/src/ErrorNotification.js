function ErrorNotification(props) {
    // if (!props.error) {
    //     return null;
    // }

    return (
        <div className="alert alert-danger">
            {props.children}
        </div>
    );
}

export default ErrorNotification;
