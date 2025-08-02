function greetuser(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greetuser({
    name: "Harsh",
    age: 21,
});

let user1 = {
    name: "mukesh",
    age: 14,
};

greetuser(user1);