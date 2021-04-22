const theOneFunc = (sec) => {
  console.log(sec + " seconds has passed");
};

setTimeout(theOneFunc, 1 * 1000, 1);
setTimeout(theOneFunc, 2 * 1000, 2);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
