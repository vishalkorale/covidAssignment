// /**
//  * Problem 3
//  *
//  * Get all the countries with death percentage greater than 30.
//  * input: country_wise_latest.json
//  * output:
//  *
//  * [{
//  *  "countryName": "Afghanistan",
//  *  "totalConfirmedCases": 1000,
//  *  "deathsPercentage": "30%",
//  *  "recoveredPercentage": "60%",
//  *  "activePercentage": "10%"
//  * },
//  * {
//  *  "countryName": "India",
//  *  "totalConfirmedCases": 1000,
//  *  "deathsPercentage": "30%",
//  *  "recoveredPercentage": "60%",
//  *  "activePercentage": "10%"
//  * }]
//  */

// const {parseCsvToJson, calculatePercentage}  = require("./utils");
const calculate_global_covid_stats = require("./secondTask");
const { parseCsvToJson} = require("./utils");

function allCountriesStatsAbove(allcountriesData){
  //console.log(allcountriesData);
      return allcountriesData.filter(country=>parseInt(country.deathsPercentage)>3);
}
console.log(allCountriesStatsAbove(calculate_global_covid_stats(parseCsvToJson("./data/country_wise_latest.csv"))));