
import { incrementPoints, decrementPoints, resetPoints } from './points';
import { refreshBoard } from './board';

// Action type dispatch keys
export const INCREMENT_POINTS = 'INCREMENT_POINTS';
export const DECREMENT_POINTS = 'DECREMENT_POINTS';
export const RESET_POINTS = 'RESET_POINTS';
export const REFRESH_BOARD = 'REFRESH_BOARD';

// Action type keys with their respective functions
export const actions = {
  INCREMENT_POINTS: incrementPoints,
  DECREMENT_POINTS: decrementPoints,
  RESET_POINTS: resetPoints,
  REFRESH_BOARD: refreshBoard,
};