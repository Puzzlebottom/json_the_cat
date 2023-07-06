const request = require("request");

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {
  if (err) {
    console.log(err.message);
  }
  const status = `RESPONSE: ${response.statusCode}\n`;
  const result = JSON.parse(body);
  console.log(status, result);
});