import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  return (
    <div className="navbar bg-neutral-900">
      <div className="flex-1 normal-case text-xl">Munro Go</div>
      <Link
        type="button"
        className="btn btn-ghost normal-case text-xl"
        to="/Dashboard"
      >
        Dashboard
      </Link>
      <Link
        type="button"
        className="btn btn-ghost normal-case text-xl"
        to="/map"
      >
        Map
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
        to="/climbs"
      >
        Climbs
      </Link>
      <Link
        type="button"
        className="btn btn-ghost normal-case text-xl"
        to="/reviews"
      >
        Reviews
      </Link>
      <Logout />
    </div>
  );
}
