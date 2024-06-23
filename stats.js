/**
 * Problem 1
 *
 * Get total number of confirmed cases, percentage of deaths, percentage of recovered
 * and percentage of active cases in the world
 *
 * input: country_wise_latest.json
 * output:
 *
 * {
 *  "totalConfirmedCases": 1000,
 *  "deathsPercentage": "30%",
 *  "recoveredPercentage": "60%",
 *  "activePercentage": "10%"
 * }
 */

const {parseCsvToJson, calculatePercentage} = require("./utils");

const generateStats = function (allCountriesData) {

  const totalStats = allCountriesData.reduce((acc, country) => {

    const confirmed = parseInt(country.Confirmed);
    const deaths = parseInt(country.Deaths);
    const recover = parseInt(country.Recovered);
    const active = parseInt(country.Active);

    acc.totalConfirmedCases += confirmed;
    acc.totalDeaths += deaths;
    acc.totalRecovered += recover;
    acc.totalActive += active;

    return acc;
  }, {totalConfirmedCases: 0, totalDeaths: 0, totalRecovered: 0, totalActive: 0});

  const deathsPercentage = calculatePercentage(totalStats.totalDeaths, totalStats.totalConfirmedCases);
  const recoveredPercentage = calculatePercentage(totalStats.totalRecovered, totalStats.totalConfirmedCases);
  const activePercentage = calculatePercentage(totalStats.totalActive, totalStats.totalConfirmedCases);

  const result = {
    totalConfirmedCases: totalStats.totalConfirmedCases,
    deathsPercentage,
    recoveredPercentage,
    activePercentage,
  };

  return result;
};

module.exports ={generateStats};
//console.log(generateStats(parseCsvToJson("./data/country_wise_latest.csv")));
