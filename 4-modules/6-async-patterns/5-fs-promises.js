//Here the readFile is destructured from promises object that is attached to the top level api of the fs module. Now you get a promised-based readFile right out of the box, ready to be consumed with the async/await pattern. This is the near future of all node api. Promises are better than callbacks, easier to read and gives us more flexibilty to nest operations and even loop over them.

const { readFile } = require("fs").promises;

async function main() {
  const data = await readFile(__filename);
  console.log("File data is", data);
}

main();

console.log("TEST");
