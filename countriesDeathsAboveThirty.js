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


const calculatedCountryWiseStats = require("./countryWiseStats");
const { parseCsvToJson} = require("./utils");

function allCountriesStatsAbove(allcountriesData){
      return allcountriesData.filter(country=>parseInt(country.deathsPercentage)>25);
}
console.log(allCountriesStatsAbove(calculatedCountryWiseStats(parseCsvToJson("./data/country_wise_latest.csv"))));