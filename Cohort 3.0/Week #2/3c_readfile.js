const fs = require("fs")

function read(err, data){
    console.log(data);
    
}

fs.readFile("a.txt","utf8", read);

fs.readFile("b.txt","utf8", read);

console.log("all done!");

