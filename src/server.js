require("env2")(".env");
const http = require("http");
const router = require("./router.js");
const server = http.createServer(router);
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`server is listeining on port ${port}`);
});
