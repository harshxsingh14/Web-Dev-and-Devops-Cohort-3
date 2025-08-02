function greet(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet({
    name: "Harsh",
    age: 21,
});

let user = {
    name: "mukesh",
    age: 14,
};

greet(user);