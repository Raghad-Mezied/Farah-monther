const path = require("path");
const fs = require("fs");
const serverError = require("./serverError");
const type = {
  css: "text/css",
  js: "text/javascript",
  html: "text/html",
};
const publicHandler = (res, endPoint) => {
  const extension = endPoint.split(".")[1];

  const filePath = path.join(__dirname, "..", "..", "public", endPoint);
  fs.readFile(filePath, (error, data) => {
    if (error) {
      serverError(res);
    } else {
      res.writeHead(200, { "Content-type": type[extension] });
      res.end(data);
    }
  });
};
module.exports = publicHandler;
