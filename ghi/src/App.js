import { useEffect, useState } from "react";
import Construct from "./Construct.js";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup.jsx";
import ErrorNotification from "./ErrorNotification";
import "./App.css";
import { useGetAccountQuery } from "./services/auth";

function App() {
  const [launch_info, setLaunchInfo] = useState([]);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState([]);
  const [logout, setLogout] = useState([]);
  const [signup, setSignup] = useState([]);
  const { data: account } = useGetAccountQuery();


  const showAuthForms = () => (
  <>
    <div className='row'>
      <div className='col'><Login /></div>
    </div>
    <div className='row'>
      <div className='col'><Signup /></div>
    </div>
  </>
  )

  return (
      <div className='container'>
        <h1>munroGo</h1>
        <hr />
          <h2>Hey {account?.username || 'stranger'}</h2>
        <hr />

        <div>{account ? <Logout /> : showAuthForms()}</div>
    </div>

  );
}

export default App;
