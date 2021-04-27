const fs = require("fs");
//One inconvenience about callbacks is that they have to be nested inside of each other in order to write async actions that depends on each other, and can lead to multiple levels of nesting (aka Pyramid of Doom) which is hard to read and maintain. Fortunately, modern js has adopted the promise pattern and so did nodejs...

fs.readFile(__filename, function cb1(err, data) {
  fs.writeFile(__filename + ".copy", data, function cb2(err) {
    // Nest more callbacks here...
  });
});

console.log("TEST");
