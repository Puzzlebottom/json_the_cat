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
    return console.log(`${status} ${message}`);
  }

  if (!Object.keys(JSON.parse(body)).length) {
    return console.log('Your query does not match any existing breeds');
  }

  const result = `\n${JSON.parse(body)[0].description}\n`;
  console.log(result);
});
;
