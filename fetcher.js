const request = require('request');
const fs = require('fs');

const args = process.argv;
const URL = args[2];
const PATH = args[3];

request(URL, (error, response, body) => {
  fs.writeFile(PATH, body, () => {
    fs.readFile(PATH, 'utf8', (error, data) => {
      let dataSize = data.length;
      console.log(`Downloaded and saved ${dataSize} bytes to ${PATH}`);
    });
  });
});