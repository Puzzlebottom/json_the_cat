const request = require("request");
const { baseURL } = require("./constants");

const fetchBreedDescription = (breedName, callback) => {

  request(baseURL + breedName, (err, response, body) => {
    if (err) {
      const status = `RESPONSE: ${response.statusCode}`;
      const message = err.message;
      return callback(`${status} ${message}`, null);
    }

    if (!Object.keys(JSON.parse(body)).length) {
      return callback('Your query does not match any existing breeds');
    }

    const result = `\n${JSON.parse(body)[0].description}\n`;
    return callback(null, result);
  });
};


module.exports = { fetchBreedDescription };