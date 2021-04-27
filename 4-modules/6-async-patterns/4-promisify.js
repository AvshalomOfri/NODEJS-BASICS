const fs = require("fs");
const util = require("util");

//Here's a promisified version of readFile which returns a promise instead of depending on a callback. util.promisify() can take a function written in the common error-first callback style, and return a version that returns promises.
const readFile = util.promisify(fs.readFile);

//The promisified readFile is then called via the async/await pattern
async function main() {
  const data = await readFile(__filename);
  console.log("File data is", data);
}

main();

console.log("TEST");
// console.log(util);
