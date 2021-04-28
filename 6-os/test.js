const { spawn } = require("child_process");

console.log("this is test.js");

// Use Shell Syntax
const shell = spawn("node t.js", { shell: true });
shell.stdout.pipe(process.stdout);
