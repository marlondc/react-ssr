import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul className="nav__list">
      <li className="nav__list__item">
        <Link to="/" className="nav__link">Home</Link>
      </li>
      <li className="nav__list__item">
        <Link to="/about" className="nav__link">About</Link>
      </li>
      <li className="nav__list__item">
        <Link to="/game" className="nav__link">Game</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
