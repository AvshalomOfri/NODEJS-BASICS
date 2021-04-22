// Before executing the code written inside a module, Node takes the entire code and
// encloses it within a function wrapper. The syntax of this function wrapper is:
// function(exports,module,require,__filename,__dirname)
// The entire code written inside a module is private to the module, unless explicitly stated (exported) otherwise.
// Even if you define a global variable in a module using var, let or const keywords, the variables are scoped locally to the module rather than being scoped globally (unlike in the browser)
// const fs = require("fs");
// console.log(arguments);

// const fs = require('fs');

function sum(a, b) {
  return a + b;
}

//Ways to assign objects to the module.exports object:
module.exports.sum = sum;
exports.a = 42; //notice how "module" does not need to explicitly precede "exports"
exports.inModFunc = (str) => 'hello ' + str;

// console.log(arguments);
