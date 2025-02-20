const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  let symbol = "ABCDEF-0123456789";
  if (n.length !== 17) {
    return false;
  }
  let arrayAdress = n.split("");
  for (let i = 0; i < arrayAdress.length; i++) {
    if (!symbol.includes(arrayAdress[i])) {
      return false;
    }
    return true;
  }

  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address,
};
