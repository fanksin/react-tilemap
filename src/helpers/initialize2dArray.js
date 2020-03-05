import generateRandomInt from './getRandomInt';

/**
 * Returns a two-dimensional array
 * @param {Number} rows
 * @param {Number} columns
 */
export default (rows = 10, columns = 10) => {
  let array = new Array(rows);
  for(let i = 0; i < array.length; i++) {
    array[i] = Array.from({length: columns}, () => generateRandomInt(1));
  }

  return array;
};