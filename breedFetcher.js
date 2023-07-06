const request = require("request");

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {
  if (err) {
    const status = `RESPONSE: ${response.statusCode}`;
    const message = err.message;
    console.log(`${status} ${message}`);
  }
  // const status = `RESPONSE: ${response.statusCode}\n`;
  const result = JSON.parse(body)[0].description;

  console.log(result);
});