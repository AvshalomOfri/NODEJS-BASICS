//this will work as intended once curr and acc are swapped...
function convertArrayToObject(arr) {
  return arr.reduce((curr, acc) => {
    acc[curr[0]] = curr[1];
    // console.log(acc);
    return acc;
  }, {});
}

function convertArrayToObject(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    // console.log(acc);
    return acc;
  }, {});
}

const obj = convertArrayToObject([
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
  [4, "Four"],
  [5, "Five"],
]);

console.log(obj);
/* Should output:

  {
    1: 'One',
    2: 'Two',
    3: 'Three'
    4: 'Four',
    5: 'Five'
  }

*/
