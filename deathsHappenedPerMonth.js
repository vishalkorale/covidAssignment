/**
 * Problem 6
 *
 * Get deaths happened per month
 *
 * output: [
 *   {
 *     "month": "01-2020",
 *     "deaths": 2000
 *   },
 *   {
 *     "month": "02-2020",
 *     "deaths": 4000
 *   }
 * ]
 */

const {parseCsvToJson} = require("./utils");

function deathsPerMonth(allCountryData) {
  let totaldeathsByMonth = [];
  const monthCurrent = {};

  allCountryData.map((element) => {
    if ( !element["Date"] || !element["Deaths"]) {
      return;
    }

    const dateParts = element["Date"].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const deaths = parseInt(element["Deaths"]);

    let yearMonth = `${year}-${month}`;

    if (!monthCurrent[yearMonth]) {
      monthCurrent[yearMonth] = 0;
    }
    monthCurrent[yearMonth] += deaths;
  });

  for (let month in monthCurrent) {
    totaldeathsByMonth.push({
      month,
      deaths:monthCurrent[month],
    });
  }
  return totaldeathsByMonth;
}

console.log(deathsPerMonth(parseCsvToJson("./data/day_wise.csv")));
