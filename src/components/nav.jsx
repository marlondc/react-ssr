import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul className="nav__list">
      <li className="nav__list__item">
        <NavLink
          exact
          to="/"
          activeClassName="nav__link--selected"
          className="nav__link"
        >
          Home
        </NavLink>
      </li>
      <li className="nav__list__item">
        <NavLink
          to="/about"
          activeClassName="nav__link--selected"
          className="nav__link"
        >
          About
        </NavLink>
      </li>
      <li className="nav__list__item">
        <NavLink
          to="/game"
          activeClassName="nav__link--selected"
          className="nav__link"
        >
          Game
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
