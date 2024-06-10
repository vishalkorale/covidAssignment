const Papa = require("papaparse");
const fs = require("fs");

// Parse local CSV file
const getJsonFor = function (fileName) {
  const { data } = Papa.parse(fs.readFileSync(fileName, "utf-8"), {
    complete: function () {
      console.log("CSV parsed successfully");
    },
    header: true,
  });

  return data;
};

console.log(getJsonFor("./country_wise_latest.csv"));
