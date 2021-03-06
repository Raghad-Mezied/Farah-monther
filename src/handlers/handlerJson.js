const path = require("path");
const fs = require("fs");

const handlerJson = res => {
  const filePath = path.join(__dirname, "..", "..", "movies.json");
  fs.readFile(filePath, (error, data) => {
    if (error) {
      serverError(res);
    } else {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    }
  });
};
module.exports = handlerJson;
