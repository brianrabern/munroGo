import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-neutral-900">
      <div className="gap-1">
        <img className="w-12" src="./MunroGo.png" alt="Mountains" />
        <div className="normal-case text-xl">MunroGo</div>
      </div>
      <div className="flex items-center">
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
        <Link
          type="button"
          className="btn btn-ghost normal-case text-xl"
          to="/about"
        >
          About
        </Link>
      </div>

      <Logout />
    </div>
  );
};

export default Navbar;
