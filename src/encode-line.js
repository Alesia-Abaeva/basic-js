const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str ) {
  let firsSymbol = str[0];
  let countSymbol = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    countSymbol += 1;
    if (str[i + 1] !== firsSymbol) {
      if (countSymbol === 1) {
        result += firsSymbol;
      } else {
        result += countSymbol + firsSymbol;
      }

      firsSymbol = str[i + 1];
      countSymbol = 0;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
