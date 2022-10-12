const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";

  try {
    let dateString = date.toDateString();
    let dateMounth = dateString.slice(4, 7);
    const mounth = [
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ];
    if (dateMounth == "Dec" || dateMounth == "Jan" || dateMounth == "Feb")
      return "winter";
    if (dateMounth == "Mar" || dateMounth == "Apr" || dateMounth == "May")
      return "spring";
    if (dateMounth == "Jun" || dateMounth == "Jul" || dateMounth == "Aug")
      return "summer";
    if (dateMounth == "Sep" || dateMounth == "Oct" || dateMounth == "Nov")
      return "fall";
  } catch {
    throw new Error("Invalid date!");
  }

  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};
