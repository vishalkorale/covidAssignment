/**
 * Problem 6
 *
 * Get deaths happened per month
 *
 * output: [
 *   {
 *     "month": "01-2020",
 *     "deaths": 2000
 *   },
 *   {
 *     "month": "02-2020",
 *     "deaths": 4000
 *   }
 * ]
 */

// const getJsonFor = require("./main");
// const newArray = getJsonFor("./data/day_wise.csv");

// let month = "";
// let deaths = "";
// let totaldeathsByMonth = [];
// let totaldeathsBy  = [];
// const monthCurrent = {}

// function deathsBYMonth() {
//   newArray.forEach((element) => {
//     if (Object.keys(element).length === 0) {
//       return;
//     }
//       month = element["Date"].slice(0, 7);
//       deaths = parseInt(element["Deaths"]);

//     //  element["Deaths"] += deaths;

//      totaldeathsByMonth.push({
//        month,
//        deaths
//      })
  
     
//     })
//     totaldeathsByMonth.forEach((element) => {
//          if(!monthCurrent.month){
//            monthCurrent.month = 0;
//          }

//          monthCurrent.deaths += element[deaths];

//          totaldeathsBy.push(monthCurrent)

//    });

//   return monthCurrent;
// }

// // module.exports = deathsBYMonth;
// console.log(deathsBYMonth());


const {parseCsvToJson} = require("./utils");

let totaldeathsByMonth = [];

function deathsByMonth(allCountryData) {
  const monthCurrent = {};

   allCountryData.map((element) => {
    if ( !element["Date"] || !element["Deaths"]) {
      return;
    }

    const dateParts = element["Date"].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const deaths = parseInt(element["Deaths"]);

    let yearMonth = `${year}-${month}`;

    if (!monthCurrent[month]) {
      monthCurrent[yearMonth] = 0;
    }
    
    monthCurrent[yearMonth] += deaths;
    console.log(monthCurrent[yearMonth]);
  });

  for (let month in monthCurrent) {
    totaldeathsByMonth.push({
      month,
      deaths:monthCurrent[month],
    });
    console.log("monthcurrent");
    console.log(monthCurrent[month]);
  }
  return totaldeathsByMonth;
}

console.log(deathsByMonth(parseCsvToJson("./data/day_wise.csv")));
