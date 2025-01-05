const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {

        for (let k = 1; k < directions.length; k++) {
          let direction = directions[k];
          if (i + direction[0] >= 0 && i + direction[0] < matrix.length && j + direction[1] >= 0 && j + direction[1] < matrix.length && matrix[i + direction[0]][j + direction[1]] !== true) {
            matrix[i + direction[0]][j + direction[1]] += 1;
          }
        }

      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        matrix[i][j] = 1;
      }
      if (typeof matrix[i][j] === 'boolean') {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper
};
