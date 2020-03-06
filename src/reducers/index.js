import initialize2dArray from '../helpers/initialize2dArray';
import {actions} from './actions';

const initialState = {
  board: {
    tileMap: initialize2dArray(6, 8),
    rows: 6,
    columns: 8
  },
  points: 0,
};

/**
 * Perform a state reduction with the specified action, if one exists
 * @param {Object} state The application's state
 * @param {String} action Action to perform
 */
export const reducer = (state = initialState, action) => {
  if(Object.prototype.hasOwnProperty.call(actions, action.type)) {
    console.log(`Action => ${action.type}`); // TODO: remove
    const updatedState = actions[action.type](state, action);
    state = {...state, ...updatedState};
  }
  
  return state;
};