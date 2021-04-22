// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

// With require
const { readFile } = require("fs");

const circle = {
  label: "circleX",
  radius: 2,
};

const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2);
console.log(circleArea(circle));

const [one, two, three] = [1, 2, 3];
console.log(one, two, three);
