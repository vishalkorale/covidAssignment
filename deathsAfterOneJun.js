const { parseCsvToJson } = require("./utils");
const fs = require("fs");

const deathsAfterTWentyNineFeb = function (allCountryData) {
  return allCountryData.reduce((accumulator, currentValue) => {
    if (!currentValue["Date"] || !currentValue["Deaths"]) {
      return accumulator;
    }
    const dateParts = currentValue["Date"].split("-");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

      if((month > "05" || (month === "05" && day > "01") )){
        return accumulator + parseInt(currentValue["Deaths"],10);
      }
    
      return accumulator;
  }, 0);
};
console.log(deathsAfterTWentyNineFeb(parseCsvToJson("./data/day_wise.csv")));
