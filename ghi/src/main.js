import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Main() {



  return (
    <div className="container">
      <Link type="button" className="btn btn-success" to="/login">
        Login
      </Link>
      <Link type="button" className="btn btn-success" to="/signup">
        Signup
      </Link>
      
    </div>
  );
}

export default Main;
