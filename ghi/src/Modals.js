import { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup.jsx";
import { useGetAccountQuery } from "./services/auth";


function LoginModal() {

    const { data: account } = useGetAccountQuery();

    const showAuthForms = () => (
      <>
        <div className="row">
          <div className="col">
            <Login />
          </div>
        </div>
      </>
    );

  return (

     <div className="container">
        <hr />
        <h2>Hey {account?.username || "stranger"}</h2>
        <hr />

        <div>{account ? <Logout /> : showAuthForms()}</div>
      </div>
  );

}

export default LoginModal;
