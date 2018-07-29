import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Game"
        className={
          window.location.pathname === "/Play Game" ? "nav-link active" : "nav-link"
        }
      >
        Game!
      </Link>
    </li>
    
    
      
  </ul>
);

export default NavTabs;
