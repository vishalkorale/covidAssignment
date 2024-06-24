
/**
 * Problem 9
 * 
 * Sort the list by date in ascending order
 * 
 * input: day_wise.csv
 */

const {parseCsvToJson} = require("./utils");

function countriesByDateInAscending(countryData){
   return countryData.sort((a,b) => {
      return new Date(a["Date"]) - new Date(b["Date"]);
   });
}

console.log(countriesByDateInAscending(parseCsvToJson("./data/day_wise.csv")));
