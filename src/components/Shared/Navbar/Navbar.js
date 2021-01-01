import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Planets</Link>
          </li>
          <li>
            <Link to="/spaceships">Spaceships</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  