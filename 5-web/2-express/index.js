const express = require("express");

const server = express();
//with express we define listeners per url path
server.get("/", (req, res) => {
  res.send("hello express");
  //no need for res.end(), the express res.send() method will do it for us
});
server.get("/about", (req, res) => {
  res.send("about page");
  //no need for res.end(), the express res.send() method will do it for us
});

server.listen(3000, () => {
  console.log("Express Server is running...");
});
