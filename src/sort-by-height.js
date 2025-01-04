const { NotImplementedError } = require('../extensions/index.js');

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
  let arrCopy = arr;
  let sortArr = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let res = [];

  let dif = 0;
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === -1) {
      dif += 1;
      res.push(arrCopy[i]);
      continue;
    }
    res.push(sortArr[i - dif]);
  }

  return res;
}

module.exports = {
  sortByHeight
};
