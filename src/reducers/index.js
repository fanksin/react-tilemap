import { incrementPoints, decrementPoints, resetPoints } from './points';
import { refreshBoard } from './board';
import initialize2dArray from '../helpers/initialize2dArray';

const initialState = {
  tileMap: initialize2dArray(6, 8),
  points: 0
};

/**
 * Perform a state reduction with the specified action
 * @param {Object} state The application's state
 * @param {String} action Action to perform
 */
const reducer = (state = initialState, action) => {
  // Actions look up table
  const actions = {
    INCREMENT_POINTS: incrementPoints,
    DECREMENT_POINTS: decrementPoints,
    RESET_POINTS: resetPoints,
    REFRESH_BOARD: refreshBoard,
  };
  
  // If an action exists, perform the state reduction
  if(Object.prototype.hasOwnProperty.call(actions, action.type)) {
    console.log(`Action => ${action.type}`);
    const updatedState = actions[action.type](state);
    state = {...state, ...updatedState};
  }
  
  return state;
};

export default reducer;