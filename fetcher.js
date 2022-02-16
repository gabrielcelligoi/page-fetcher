const request = require('request');
const fs = require('fs');

const args = process.argv;
const URL = args[2];
const PATH = args[3];

request(URL, (error, response, body) => {
  fs.writeFile(PATH, body, () => {
    console.log(`Downloaded and saved 3261 bytes to ${PATH}`);
  })
});