const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let key = '';
  let count = 1;
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.');
    for (let j = domain.length - 1; j >= 0; j--) {
      key += '.' + domain[j];
      if (!obj[key]) {
        obj[key] = count;
        continue;
      }
      obj[key]++;
    }
    key = '';
  }
  return obj;
}

module.exports = {
  getDNSStats
};
