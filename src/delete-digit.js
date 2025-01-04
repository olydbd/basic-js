const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = Array.from(String(n), Number);
  let l = arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      break;
    }
  }
  if (arr.length === l) {
    arr.pop();
  }
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
