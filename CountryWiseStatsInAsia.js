/**
 * Problem 4
 *
 * Get totalConfirmedCases, deathsPercentage, recoveredPercentage, activePercentage of all countries in Asia.
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

// const getJsonFor = require("./main");

// let newArray = getJsonFor("./data/country_wise_latest.csv");


// const asianCountries = () => {
//   totalConfirmedCases = 0;
//   recoveredCases = 0; 
//   deathscases = 0;
//   activecases = 0;

//   newArray.filter((element) => element["WHO Region"] === "South-East Asia").map((element) => {
//      if (Object.keys(element).length === 0) {
//        return;
//      }

//     const confirmed = parseInt(element.Confirmed) || 0;
//     const recovered = parseInt(element.Recovered) || 0;
//     const deaths = parseInt(element.Deaths) || 0;
//     const active = parseInt(element.Active) || 0;

//     totalConfirmedCases += confirmed;
//     recoveredCases += recovered;
//     deathscases += deaths;
//     activecases += active;
// });

//   const deathsPercentage = (deathscases / totalConfirmedCases) * 100;
//   const recoveredPercentage = (recoveredCases / totalConfirmedCases) * 100;
//   const  activePercentage = (activecases / totalConfirmedCases) * 100;

//   return {
//     totalConfirmedCases,
//     deathsPercentage,
//     recoveredPercentage,
//     activePercentage,
//   };



// };
// console.log(asianCountries()); 

const allcountryWisestats = require("./countryWiseStats");
const {parseCsvToJson} = require("./utils");
const asianCountries = [
  "Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Cyprus","Georgia",
  "India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia",
  "Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Russia","Saudi Arabia",
  "Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan",
  "United Arab Emirates","Uzbekistan","Vietnam","Yemen"
];

const getsianCountries = (allcountriesdata) => {


  return  allcountriesdata.filter((currentCountryData) => asianCountries.includes(currentCountryData["countryName"]));
}

console.log(getsianCountries(allcountryWisestats(parseCsvToJson("./data/country_wise_latest.csv"))));