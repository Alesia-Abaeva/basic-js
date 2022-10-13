const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;
  let number = String(n).split("");
  // console.log(summ, "summ");

  number.forEach((elem) => {
    console.log(result, "result");
    result += Number(elem);
    // return result;
  });

  if (String(result).length === 1) {
    return result;
  } else return getSumOfDigits(result);
}

module.exports = {
  getSumOfDigits,
};
