import {
  PICK,
} from '../actions/game';

import {
  containsWinningCombination,
  pickSquare,
} from '../helpers/game';

const initialState = {
  wins: 0,
  losses: 0,
  X: [],
  O: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PICK: {
      const { pos } = action;
      const newX = [...state.X, pos];

      if (containsWinningCombination(newX)) {
        return {
          ...state,
          wins: state.wins + 1,
          X: [],
          O: [],
        };
      }

      const newO = [...state.O, pickSquare(newX, state.O)];


      if (containsWinningCombination(newO)) {
        return {
          ...state,
          losses: state.losses + 1,
          X: [],
          O: [],
        };
      }

      return {
        ...state,
        X: newX,
        O: newO,
      };
    }
    default:
      return state;
  }
};
