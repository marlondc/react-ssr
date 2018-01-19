import {
  INCREMENT,
} from '../actions';

const INITIAL_STATE = {
  name: 'MARLON',
  value: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};
