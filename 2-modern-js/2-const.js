// const is used when the assigned reference is meant to stay constant.

// Scalar values will stay immutable
const answer = 42;
const greeting = "Hello";

try {
  greeting = "goodbye";
} catch (error) {
  console.log(error.message);
}

// While Arrays and Objects can be mutated even though their reference remain the same
const numbers = [2, 4, 6];
const person = {
  firstName: "John",
  lastName: "Doe",
  detail: {
    a: 1,
    b: 2,
  },
};

person.lastName = "Cena";

//Object.freeze enable immutability but only for the first level of the object. Deeper nesting will remain mutable
Object.freeze(person);
person.lastName = "Wick";
person.detail.a = 3;

console.log(person);
//you can turn your object immutable with the Immutable.js library
