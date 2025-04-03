const fs = require('fs');

const read = fs.readFileSync("a.txt","utf-8");
const read01 = fs.readFileSync("b.txt","utf-8");

console.log(read);
console.log(read01);
