/**
 * Increment the points value by 1
 * @param {Object} state The application's state
 */
export const incrementPoints = (state, action) => {
  return {
    points: state.points + action.pointsToIncrement
  };
};

/**
 * Decrement the points value by 1
 * @param {Object} state The application's state
 */
export const decrementPoints = (state, action) => {
  return {
    points: state.points - action.pointsToDecrement
  };
};

/**
 * Reset points to 0
 * @param {Object} state The application's state
 */
export const resetPoints = () => {
  return {
    points: 0
  };
};