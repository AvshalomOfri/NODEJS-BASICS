//Error vs Exception
// An error will terminate the process while an exception will let the user know something exceptional has occured but won't kill the process and will proceed to the next operation

const path = require("path");
const fs = require("fs");
const parentPath =
  "C:/Users/PCP-RENT/VS Codium Projects/NODEJS-BASICS/4-modules/5-errors/";

const files = ["bla", "1-loop.js", "2-try.js", "./noSuchFile"];

files.forEach((file) => {
  try {
    const filePath = path.resolve(parentPath, file);
    // console.log(filePath);
    const data = fs.readFileSync(filePath);
    console.log("File data is", data);
  } catch (err) {
    //here we'll check for the ENOENT error (file not found) instead of throwing a generic, non-specific error message irregardless of error type. In case of an ENONET err, we'll log the message and proceed to the next element to read. In case of another error, we will terminate the process by throwing
    if (err.code === "ENOENT") {
      console.log("File not found");
    } else {
      throw err;
    }
  }
});
