const HomeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");
const handlerJson = require("./handlers/handlerJson");
const getSearchValue = require("./handlers/getSearchValue");
const router = (req, res) => {
  let endPoint = req.url;
  if (endPoint === "/") {
    HomeHandler(res);
  } else if (endPoint === "/css/style.css") {
    publicHandler(res,endPoint);
  } else if (endPoint === "/search" && req.method === "GET") {
    handlerJson(res);
  } else if (endPoint === "/search" && req.method === "POST") {
    getSearchValue(req, res);
  }
  if (endPoint === "/js/script.js") {
    publicHandler(res,endPoint);
  }
  
};
module.exports = router;
