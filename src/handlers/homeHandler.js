const path = require("path");
const fs = require("fs");
const homeHandler = (res) => {
  const filePath = path.join(__dirname, "..", "..", "public", "index.html");
  fs.readFile(filePath, (error, data) => {
    if (error) {
      serverError(res);
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    }
  });
};
module.exports = homeHandler;
