const fs = require("fs");
//The callback pattern is used to handle async operations, where a callback function is fired once the data is received. The error-first argument is standard in the node idiomatic callback pattern. If there's an error in code, this first err argument will be an error object, and if there's no error in the code this first argument will be passed as null.
//The readFile method access the data asynchronously, and needs to go through the event loop, you can't access the data right after calling this method, only after it has been received.
fs.readFile(__filename, function cb(err, data) {
  console.log("File data is", data);
});

console.log("TEST");
