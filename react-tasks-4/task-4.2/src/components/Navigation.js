import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="nav">
      <li className="nav-item mr-3">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item mr-3">
        <Link to="/Contact">Contacts</Link>
      </li>
      <li className="nav-item mr-3">
        <Link to="/About">About</Link>
      </li>
    </ul>
  );
}
export default Navigation;
