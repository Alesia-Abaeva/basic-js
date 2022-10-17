const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let max = 1;

    for (let index = 0; index < array.length; index++) {
      if (typeof array[index] === "object") {
        let current = 1;
        current += this.calculateDepth(array[index]);
        if (current > max) {
          max = current;
        }
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator,
};
