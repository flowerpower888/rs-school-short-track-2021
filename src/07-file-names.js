/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [...names];
  let k = 0;
  let prev;

  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(res[i]) !== res.lastIndexOf(res[i])) {
      if (res[i] === prev) k = 1;
      if (k > 0) res[i] += `(${k})`;
      prev = res[i];
      k++;
    }
  }
  return res;
}

module.exports = renameFiles;
