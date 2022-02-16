const https = require("https");
const fetchData = (value, res) => {
  const api = `https://api.themoviedb.org/3/search/movie?&api_key=e4e72d82643e224bf78695be0b5602cd&query=${value}`;
  let data = "";

  https.get(api, (response) => {
    response.on("data", (chuck) => {
      data += chuck;
    });
    response.on("end", () => {
      console.log(JSON.parse(data), typeof JSON.parse(data));
      res.end(data);
    });
  });
};
module.exports = fetchData;
