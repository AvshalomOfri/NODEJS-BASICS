const fs = require("fs");
//readFileSync is the synchronous method for reading file in node. You don't any pattern to consume its data, you get the data when you call the method. The program does not go through the event loop here, but uses the os' synchronous, file reading api.
const data = fs.readFileSync(__filename);

console.log("File data is", data);

console.log("TEST");
