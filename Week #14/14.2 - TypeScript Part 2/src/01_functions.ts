function greet(name: string): string {
    return "Hello " + name;
}

let greetings = greet("Harsh");

console.log(greetings); 


function sum(a: number, b: number): number {
    return a + b;
}

let result = sum(10, 20);

console.log(result); 


function isEven(num: number): boolean {
    return num % 2 === 0;
}

let even = isEven(10);

if (even) {
    console.log("Even"); 
} else {
    console.log("Odd"); 
}