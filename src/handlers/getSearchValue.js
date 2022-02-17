const querystring = require("querystring");
const fetchData = require("./fetchData");
const getSearchValue = (req, res) => {
  let allData = "";
  req.on("data", (chuckdata) => {
    allData += chuckdata;
  });
  req.on("end", () => {
    console.log("value", allData);

    fetchData(allData, res);
  });
};
module.exports = getSearchValue;
