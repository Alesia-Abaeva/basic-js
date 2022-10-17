const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let listsName = {};
  let resultName = [];
  for (let name of names) {
    if (!listsName.hasOwnProperty(name)) {
      resultName.push(name);
      listsName[name] = 0;
    } else {
      listsName[name] += 1;
      const newFileName = name + `(${listsName[name]})`;
      resultName.push(newFileName);
      if (!listsName.hasOwnProperty(newFileName)) {
        listsName[newFileName] = 0;
      } else {
        listsName[newFileName] += 1;
      }
    }
  }
  return resultName;
}

module.exports = {
  renameFiles,
};
