import React from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from '../components/atoms/header';

const Game = ({
  wins, X, O, pick, losses,
}) => (
  <div id="content" className="container">
    <HeaderComponent>Game</HeaderComponent>
    <p>Wins: {wins}</p>
    <p>Losses: {losses}</p>
    <div className="game__grid">
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((pos) => {
          if (X.includes(pos)) {
            return (
              <div className="game__square" key={pos}>
                <p>X</p>
              </div>
            );
          } else if (O.includes(pos)) {
            return (
              <div className="game__square" key={pos}>
                <p>O</p>
              </div>
            );
          }

          return (
            <div
              className="game__square game__square--clickable"
              key={pos} onClick={() => pick(pos)}
            >
              ?
            </div>
          );
        })
      }
    </div>
  </div>
);

Game.propTypes = {
  wins: PropTypes.number.isRequired,
  losses: PropTypes.number.isRequired,
  X: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  O: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  pick: PropTypes.func.isRequired,
};

export default Game;
