interface People {
    name: string,
    age: number,
    greet: () => string, 
}

let person: People = {
    name: "Harsh",
    age: 21,
    greet: () => { 
        return "Hi " + person.name;
    }
}

let greeting = person.greet();

console.log(greeting); 