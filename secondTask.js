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

const {parseCsvToJson, calculatePercentage} = require("./utils");

const calculate_global_covid_stats = function (allCountries) {
  let totalConfirmed = 0;
  let totalDeaths = 0;
  let totalRecovered = 0;
  let totalActive = 0;

  generated_global_stats = allCountries.map((CountryData) => {
    // if (Object.keys(CountryData).length === 0) {
    //   return;
    // }

    const countryName = CountryData["Country/Region"];
    const confirmed = parseInt(CountryData.Confirmed);
    const deaths = parseInt(CountryData.Deaths);
    const recovered = parseInt(CountryData.Recovered);
    const active = parseInt(CountryData.Active);

    totalConfirmed += confirmed;
    totalDeaths += deaths;
    totalRecovered += recovered;
    totalActive += active;

    const deathsPercentage = calculatePercentage(

      totalDeaths,
      totalConfirmed
    );
    const recoveredPercentage = calculatePercentage(
      totalRecovered,
      totalConfirmed
    );
    const activePercentage = calculatePercentage(
      totalActive,
      totalConfirmed
    );

    return {
      countryName,
      totalConfirmed,
      deathsPercentage,
      recoveredPercentage,
      activePercentage
    }
  });

  return generated_global_stats;
};

module.exports = calculate_global_covid_stats;
// console.log(calculate_global_covid_stats(parseCsvToJson("./data/country_wise_latest.csv")));
