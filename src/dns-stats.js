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
  let сount = {};
  for (let elem of domains) {
    let array = elem.split(".").reverse();
    let string = ".";
    for (let i = 0; i < array.length; i++) {
      string += array[i];
      if (!сount.hasOwnProperty(string)) {
        сount[string] = 1;
      } else {
        сount[string] += 1;
      }
      string += ".";
    }
  }
  return сount;
}

module.exports = {
  getDNSStats
};
