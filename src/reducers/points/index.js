/**
 * Increment the points value by 1
 * @param {Object} state The application's state
 */
export const incrementPoints = (state) => {
  return {
    points: state.points + 1
  };
};

/**
 * Decrement the points value by 1
 * @param {Object} state The application's state
 */
export const decrementPoints = (state) => {
  return {
    points: state.points - 1
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