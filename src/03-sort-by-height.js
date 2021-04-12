/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];

  arr.forEach((num, index) => {
    if (num === -1) indexes.push(index);
  });

  const sorted = arr
    .filter((num) => num !== -1)
    .sort((a, b) => a - b);
  indexes.forEach((index) => {
    sorted.splice(index, 0, -1);
  });

  return sorted;
}

module.exports = sortByHeight;
