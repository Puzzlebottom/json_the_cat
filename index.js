const { fetchBreedDescription } = require("./breedFetcher");

const input = process.argv;
if (input.length < 3) throw new Error("ERROR: Not enough args");
if (input.length > 3) throw new Error("ERROR: Too many args");

const queryParam = input[2].toLowerCase();

fetchBreedDescription(queryParam, (error, description) => {
  if (error) {
    return console.log(error);
  }
  console.log(description);
});