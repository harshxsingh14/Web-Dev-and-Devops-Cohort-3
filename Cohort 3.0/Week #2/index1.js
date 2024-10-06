 //synchrous code
 
 const read =  require("fs");

 const contents  = read.readFile("a.txt", "utf-8"); //Asynchronsoly
 console.log(contents)

 const contents2 = read.readFileSync("b.txt","utf-8");//synchrously

