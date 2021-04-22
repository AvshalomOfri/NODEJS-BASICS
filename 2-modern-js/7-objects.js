//new addition to ES6 is dynamic properties
const dynProp = "myProp";
//key-value pairs can be more concise and only use the variable name
const PI = Math.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [dynProp]: "Some value", //property name can be changed dynamically
  PI, //instead of "name: value" you can simply write the variable's name
};

console.log(obj.dynProp); //returns undefined
console.log(obj.myProp);
console.log(obj.PI);
