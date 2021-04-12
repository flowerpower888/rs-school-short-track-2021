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
  const columns = matrix[0].length;
  let sum = 0;

  for (let col = 0; col < columns; col++) {
    for (let pos = 0; pos < matrix.length; pos++) {
      const num = matrix[pos][col];
      const numAbove = matrix[pos - 1] ? matrix[pos - 1][col] : undefined;
      if (num !== 0) {
        if (numAbove !== 0 || numAbove === undefined) {
          sum += num;
        }
      }
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
