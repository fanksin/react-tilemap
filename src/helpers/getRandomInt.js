/**
 * Get random integer between 0 and maximum value (inclusive)
 * @param max Maximum value (inclusive)
 */
export default (max = 1) => {
  return Math.floor(Math.random() * Math.floor(max + 1));
};