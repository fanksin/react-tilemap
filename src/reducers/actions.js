
import { incrementPoints, decrementPoints, resetPoints } from './points';
import { resetBoard, updateBoardSize } from './board';

// Action type dispatch keys, useful to use when dispatching events throughout the app
// TODO: Refactor
export const INCREMENT_POINTS = {
  type: 'INCREMENT_POINTS'
};
export const DECREMENT_POINTS = {
  type: 'DECREMENT_POINTS'
};
export const RESET_POINTS = {
  type: 'RESET_POINTS'
};
export const RESET_BOARD = {
  type: 'RESET_BOARD'
};
export const UPDATE_BOARD_SIZE = {
  type: 'UPDATE_BOARD_SIZE'
};

// Register an action type key with its respective function called by the reducer
export const actions = {
  INCREMENT_POINTS: incrementPoints,
  DECREMENT_POINTS: decrementPoints,
  RESET_POINTS: resetPoints,
  RESET_BOARD: resetBoard,
  UPDATE_BOARD_SIZE: updateBoardSize,
};