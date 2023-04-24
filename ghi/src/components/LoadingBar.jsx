import { useState, useEffect } from "react";

function LoadingBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress + props.increment);
    }, props.interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [props]);

  return (
    <progress
      className="progress progress-success w-56"
      value={progress}
      max="100"
    ></progress>
  );
}

export default LoadingBar;
