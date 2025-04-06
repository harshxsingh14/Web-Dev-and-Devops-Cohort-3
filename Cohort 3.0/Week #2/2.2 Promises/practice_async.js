const fs = require("fs")

function read(err, data){
    if(err){
        console.log("file not found");
    }
    
    else{
        console.log(data);
    }
        
}

fs.readFile('c.txt','utf-8',read);
fs.readFile('b.txt','utf-8',read);

console.log("hi there");
