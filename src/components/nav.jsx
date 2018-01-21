import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul className="nav__list">
      <li className="nav__link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav__link">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
