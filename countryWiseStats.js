/**
 * Problem 2
 *
 * For each country calculate percentage of deaths, recovered and active
 * input: country_wise_latest.json
 * output:
 *
 * [{
 *  "countryName": "Afghanistan",
 *  "totalConfirmedCases": 1000,
 *  "deathsPercentage": "30%",
 *  "recoveredPercentage": "60%",
 *  "activePercentage": "10%"
 * },
 * {
 *  "countryName": "India",
 *  "totalConfirmedCases": 1000,
 *  "deathsPercentage": "30%",
 *  "recoveredPercentage": "60%",
 *  "activePercentage": "10%"
 * }]
 */

const { parseCsvToJson, calculatePercentage } = require("./utils");

const calculateCountrystats = function (allCountries) {
  return allCountries.map((countryData) => {

    const countryName = countryData["Country/Region"];
    const confirmed = parseInt(countryData.Confirmed);

    return {
      countryName,
      confirmed,
      deathsPercentage: calculatePercentage(parseInt(countryData.Deaths),confirmed),
      recoveredPercentage: calculatePercentage(parseInt(countryData.Recovered),confirmed),
      activePercentage: calculatePercentage(parseInt(countryData.Active),confirmed),
    };

  });
};
module.exports = calculateCountrystats;
// console.log(calculateCountrystats(parseCsvToJson("./data/country_wise_latest.csv")));
