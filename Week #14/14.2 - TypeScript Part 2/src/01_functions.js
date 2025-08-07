function greet(name) {
    return "Hello " + name;
}
var greetings = greet("Harsh");
console.log(greetings);
function sum(a, b) {
    return a + b;
}
var result = sum(10, 20);
console.log(result);
function isEven(num) {
    return num % 2 === 0;
}
var even = isEven(10);
if (even) {
    console.log("Even");
}
else {
    console.log("Odd");
}
