import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import Login from "./Login";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { useGetAccountQuery } from "./services/auth";

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     let url = `http://localhost:3000/api/launch-details`; //`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/launch-details`;
  //     console.log("fastapi url: ", url);
  //     let response = await fetch(url);
  //     console.log("------- hello? -------");
  //     let data = await response.json();

  //     if (response.ok) {
  //       console.log("got launch data!");
  //       setLaunchInfo(data.launch_details);
  //     } else {
  //       console.log("drat! something happened");
  //       setError(data.message);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <div>
      <ErrorNotification error={error} />
      <Construct info={launch_info} />
      <Login login={login} />
    </div>
  );
}

export default App;
