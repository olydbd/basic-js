const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (arr[i] === '--double-next') {
      if (i === arr.length - 1) break;
      item = arr[i + 1];

    } else if (arr[i] === '--double-prev') {
      if (i === 0) continue;
      item = arr[i - 1];

    } else if (arr[i] === '--discard-prev') {
      if (i === 0) continue;
      res.pop();
      continue;

    } else if (arr[i] === '--discard-next') {
      if (i === arr.length - 1) break;
      i += 2;
      continue;
    }

    res.push(item);
  }

  return res;
}

module.exports = {
  transform
};
