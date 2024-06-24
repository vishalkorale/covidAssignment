/**
 * Problem 5
 * 
 * Calculate all deaths that happened in the month of March 2020
 * 
 * output: 2000 
 */

const {parseCsvToJson} = require("./utils");

// let deathsByDate = 0;
let initialValue = 0;

function DeathsHappenedInMarch(allCounrtyData){

      return allCounrtyData.filter((element) => 
            element["Date"].startsWith("2020-03") ).reduce((accumulator, currentValue) => 
            accumulator+parseInt(currentValue.Deaths), initialValue,);
}

console.log(DeathsHappenedInMarch(parseCsvToJson('./data/day_wise.csv')));
