/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const next = str[i + 1];
    if (letter === next) {
      count += 1;
    } else {
      res += (count > 1 ? count : '') + letter;
      count = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
