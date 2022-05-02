const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  var sumRes = 0;
  for (var i = matrix.length - 1; i > 0; i--) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) sumRes += matrix[i][j];
    }
  }
  for (var i = 0; i < matrix[0].length; i++) {
    sumRes += matrix[0][i];
  }
  return sumRes;
}

module.exports = {
  getMatrixElementsSum
};
