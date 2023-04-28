import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-900">
      <div className="flex-1 normal-case text-xl">MunroGo</div>
      <Link
        type="button"
        className="btn btn-ghost normal-case text-xl"
        to="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        type="button"
        className="btn btn-ghost normal-case text-xl"
        to="/munros"
      >
        Munros
      </Link>
      <Logout />
    </div>
  );
};

export default Navbar;
