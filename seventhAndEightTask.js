/**
 * Problem 7
 *
 * Get all deaths that happened after 29 Feb 2020
 *
 * output: 1000
 */

/**
 * Problem 8
 *
 * Get all deaths that happened after 01 Jun 2020
 *
 * output: 4000
 */

const { parseCsvToJson } = require("./utils");
const fs = require("fs");

const deathsAfterTWentyNineFeb = function (allCountryData) {
  let allDeathsAfter = allCountryData.reduce((accumulator, currentValue) => {
    if (!currentValue["Date"] || !currentValue["Deaths"]) {
      return accumulator;
    }
    const dateParts = currentValue["Date"].split("-");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    if ((month > "02") || (month === 2 && day > 29)) {
        return accumulator + parseInt(currentValue["Deaths"], 10);
      }

    //   if((month > "05" || (month === "05" && day > "01") )){
    //     return accumulator + parseInt(currentValue["Deaths"],10);
    //   }
  
      return accumulator;
  }, 0);

  return allDeathsAfter;
};
console.log(deathsAfterTWentyNineFeb(parseCsvToJson("./data/day_wise.csv")));
