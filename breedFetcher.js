const request = require("request");

const input = process.argv;
if (input.length < 3) throw new Error("ERROR: Not enough args");
if (input.length > 3) throw new Error("ERROR: Too many args");

const queryParam = input[2].toLowerCase();
const baseURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(baseURL + queryParam, (err, response, body) => {
  if (err) {
    const status = `RESPONSE: ${response.statusCode}`;
    const message = err.message;
    console.log(`${status} ${message}`);
  }
  const result = `\n${JSON.parse(body)[0].description}\n`;

  console.log(result);
});

