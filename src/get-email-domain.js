const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let array = email.split("");
  let indexDog;
  array.forEach((element, index) => {
    if (element === "@") {
      indexDog = index;
      return indexDog;
    }
  });

  let result = array.splice(indexDog + 1).join("");

  return result;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain,
};
