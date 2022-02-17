const https = require("https");
const fetchData = (value, res) => {
  const api = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.API_KEY}&query=${value}`;
  let data = "";

  https.get(api, response => {
    response.on("data", chuck => {
      data += chuck;
    });
    response.on("end", () => {
      res.end(data);
    });
  });
};
module.exports = fetchData;
