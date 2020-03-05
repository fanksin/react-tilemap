
import { incrementPoints, decrementPoints, resetPoints } from './points';
import { refreshBoard } from './board';

// Action type dispatch keys, useful to use when dispatching events throughout the app
export const INCREMENT_POINTS = {
  type: 'INCREMENT_POINTS'
};
export const DECREMENT_POINTS = {
  type: 'DECREMENT_POINTS'
};
export const RESET_POINTS = {
  type: 'RESET_POINTS'
};
export const REFRESH_BOARD = {
  type: 'REFRESH_BOARD'
};

// Action type keys with their respective functions, called by the reducer
export const actions = {
  INCREMENT_POINTS: incrementPoints,
  DECREMENT_POINTS: decrementPoints,
  RESET_POINTS: resetPoints,
  REFRESH_BOARD: refreshBoard,
};