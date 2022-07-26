const path = require("path");
const fs = require("fs");
const parentPath =
  "C:/Users/PCP-RENT/VS Codium Projects/NODEJS-BASICS/4-modules/5-errors/";

const files = ["we", "1-loop.js", "2-try.js"];

//If an invalid argument is used the process will terminate

files.forEach((file) => {
  const filePath = path.resolve(parentPath, file);
  // console.log(filePath);
  const data = fs.readFileSync(filePath);
  console.log("File data is", data);
});
