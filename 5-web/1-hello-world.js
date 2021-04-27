const http = require("http");

// The req object is of "Class: http.IncomingMessage", not to be confused with "Class: http.ClientRequest".
// The res object is of "Class: http.ServerResponse"
// Both req and res are also streams

// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

const requestListener = (req, res) => {
  res.end("Hello World\n"); // res.end is how you tell the http protocol that the communication is done. Without it the http session will think that data is still being streamed
};

// const server = http.createServer(requestListener);
const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});
//The event loop is now busy listening to oncoming events and will do so indefinitely until the process is terminated manually
