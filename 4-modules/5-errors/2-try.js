const path = require("path");
const fs = require("fs");
const parentPath =
  "C:/Users/PCP-RENT/VS Codium Projects/NODEJS-BASICS/4-modules/5-errors/";

const files = ["1-loop.js", "2-try.js", "./noSuchFile"];

//a try catch block provides a more customized way of error handling. in this example a custom message will be logged instead of the usual wall of text..
try {
  files.forEach((file) => {
    const filePath = path.resolve(parentPath, file);
    // console.log(filePath);
    const data = fs.readFileSync(filePath);
    console.log("File data is", data);
  });
} catch (error) {
  console.log("file not found");
}
