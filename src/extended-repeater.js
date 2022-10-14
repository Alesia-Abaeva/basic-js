const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  let result = "";
  if (str === null) {
    result = "null";
  } else result = str + "";

  let objectData = options;
  // console.log(objectData);

  if (!(objectData.addition === undefined)) {
    if (objectData.addition === null) {
      objectData.addition = "null";
    }
    if (objectData.additionRepeatTimes) {
      let arrayRepeat = [];

      arrayRepeat.length = objectData.additionRepeatTimes;
      arrayRepeat.fill(objectData.addition + "");
      // console.log(arrayRepeat);

      if (objectData.additionSeparator) {
        arrayRepeat = arrayRepeat.join(`${objectData.additionSeparator}`);
        // console.log(
        //   objectData.additionSeparator,
        //   "objectData.additionSeparator"
        // );
      } else {
        // console.log(arrayRepeat, "arrayRepeat");

        arrayRepeat = arrayRepeat.join("|");
        // console.log(arrayRepeat, "arrayRepeat");
      }

      result += arrayRepeat;
      // console.log(result, "!re");
    } else {
      result += objectData.addition + "";
    }
  }

  if (objectData.repeatTimes) {
    let array = [];
    array.length = objectData.repeatTimes;
    // console.log(array.length, "length");
    array.fill(result);

    if (objectData.separator) {
      result = array.join(`${objectData.separator}`);
    } else {
      result = array.join("+");
    }
  }

  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
