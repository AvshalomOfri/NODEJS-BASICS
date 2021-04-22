// const http = require('http'); //this is the CommonJS way of importing
import http from "http"; //this is the ECMAscript way of importing (the file extension has to be .mjs)
import { createServer } from "http"; //named import (importing a specific method by name from its module)

const server = http.createServer((req, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Server is running...");
});
