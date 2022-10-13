const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let uniqArray = new Set();
  arr.forEach((element, index) => {
    if (element === -1) {
      uniqArray.add(index);
    }
  });

  arr = arr.filter((element) => element != -1).sort((a, b) => a - b);

  for (let key of uniqArray.keys()) {
    arr.splice(key, 0, -1);
  }
  // console.log(uniqArray);
  // console.log(arr);
  return arr;
}

// function mySortFunction(a, b) {
//   a = a.replace(/-1/g, "");
//   b = b.replace(/-1/g, "");

//   return a < b ? -1 : 1;
// }

module.exports = {
  sortByHeight,
};
