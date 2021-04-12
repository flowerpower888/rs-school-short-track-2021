/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();
  const nums = [];

  for (let i = 0; i < numStr.length; i++) {
    const num = numStr[i];
    nums.push(numStr.replace(num, ''));
  }
  return Math.max.apply(null, nums);
}

module.exports = deleteDigit;
