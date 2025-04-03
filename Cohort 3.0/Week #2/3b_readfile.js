const cs = require('fs');

const read = cs.readFileSync('a.txt');
const read01 = cs.readFileSync('b.txt', 'utf-8');

console.log(read);
console.log(read01);

// require is basically the syntax for importing the fs library
// through which we can perform file input and output operations.