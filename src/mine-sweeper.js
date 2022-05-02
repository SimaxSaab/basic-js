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
  var matrixRes = [];
  for (var i = 0; i < matrix.length; i++)
    matrixRes[i] = matrix[i].slice();
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      matrixRes[i][j] = 0;
      if ((i - 1) >= 0 && (j - 1) >= 0 && matrix[i - 1][j - 1]) matrixRes[i][j]++;
      if ((i - 1) >= 0 && matrix[i - 1][j]) matrixRes[i][j]++;
      if ((i - 1) >= 0 && (j + 1) <= matrix[0].length && matrix[i - 1][j + 1]) matrixRes[i][j]++;
      if (matrix[i][j - 1]) matrixRes[i][j]++;
      if (matrix[i][j + 1]) matrixRes[i][j]++;
      if ((i + 1) < matrix.length && (j - 1) >= 0  && matrix[i + 1][j - 1]) matrixRes[i][j]++;
      if ((i + 1) < matrix.length && matrix[i + 1][j]) matrixRes[i][j]++;
      if ((i + 1) < matrix.length && (j + 1) < matrix[0].length && matrix[i + 1][j + 1]) matrixRes[i][j]++;
    }
  }
  return matrixRes;
}

module.exports = {
  minesweeper
};
