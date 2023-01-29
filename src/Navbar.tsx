import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div>
          <div className="mid">
            <ul className="navbar">
             
              <li>
                <Link to="/project1">project1</Link>
              </li>
              <li>
                <Link to="/project2">project2</Link>
              </li>
              <li>
                <Link to="/project3">project3</Link>
              </li>
              <li>
                <Link to="/project4">project4</Link>
              </li>
            </ul>
          </div>
      </div>
    </header>
  );
};
export default Navbar;
