const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let summ = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i - 1]);
      // console.log(matrix[i - 1][j]);
      if (matrix[i - 1] === undefined || matrix[i - 1][j] !== 0) {
        summ += matrix[i][j];
      }
    }
  }
  // throw new NotImplementedError('Not implemented');
  // let arrayMatrix = matrix.flat();
  // arrayMatrix.forEach((elem) => (summ += elem));

  // console.log(arrayMatrix);
  console.log(summ);
  return summ;
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum,
};
