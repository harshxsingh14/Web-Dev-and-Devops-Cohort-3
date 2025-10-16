function timeout(){
    console.log("good Morning all of you");
}

c = 0; 
for (i=0;i<=10000000;i++){
    c = c + 1;  
}

console.log("hi there",c);

setTimeout(timeout, 5000);

console.log("I hope everyone is doing great");


c = 0; 
for (i=0;i<=10000000;i++){
    c = c + 1;  
}