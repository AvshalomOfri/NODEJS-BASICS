// Print "Hello World"
// Every second
// And stop after 5 times
let count = 0;
let everySec = setInterval(() => {
  console.log("hw");
  count++;
  count > 4
    ? (() => {
        clearInterval(everySec);
        console.log("done");
      })()
    : null;
}, 1000);

// After 5 times. Print "Done" and let Node exit.
