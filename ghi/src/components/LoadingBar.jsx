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
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <p className="text-[#adb9c0] font-medium">
            Birl awa', bide a blink...
          </p>
          <progress
            className="progress progress-success w-56"
            value={progress}
            max="100"
          ></progress>
        </div>
      </div>
    </>
  );
}

export default LoadingBar;
