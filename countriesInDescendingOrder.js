/**
 * Problem 10
 * 
 * Sort the list by date in descending order
 * 
 * input: day_wise.csv
 */


const {parseCsvToJson} = require("./utils");

function countriesByDateInAscending(countryData){
   return countryData.sort((a,b) => {
      return new Date(b["Date"]) - new Date(a["Date"]);
   });
}

console.log(countriesByDateInAscending(parseCsvToJson("./data/day_wise.csv")));