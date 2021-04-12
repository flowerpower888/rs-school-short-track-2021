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
  const board = [...matrix];
  let mines = 0;

  for (let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][col] === true) {
        mines += 1;
        board[row][col] = 1;
        if (matrix[row - 1]) board[row - 1][col]++;
        if (matrix[row + 1]) board[row + 1][col]++;
        if (matrix[col - 1]) board[row][col - 1]++;
        if (matrix[col + 1]) board[row][col + 1]++;
      } else {
        board[row][col] = mines > 0 ? 1 : 0;
      }
    }
  }

  return board;
}

module.exports = minesweeper;
