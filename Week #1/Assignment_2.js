/*
function greet(user){

    console.log("Hello " + user.age + " Year old " + user.name);
    
    }

let user1 = {
    name: "Harsh",
    age : 20,
}

greet(user1);
*/

// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender 
// (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet_2(user) {
    if (user.gender === "Male" && user.age >= 18) {
        console.log("Hi Mr. " + user.name + ", your age is " + user.age + " and you are legal to vote");
    }
     else if (user.gender === "Male" && user.age < 18){
        console.log("Hi Mr. " + user.name + ", your age is " + user.age + " and you are not legal to vote");
    }
    else if (user.gender === "female" && user.age >=18) {
        console.log("Hi Mrs. " + user.name + ", your age is " + user.age + " and you are legal to vote");

    } 
    else if (user.gender === "female" && user.age < 18){
        console.log("Hi Mrs. " + user.name + ", your age is " + user.age + " and you are not legal to vote");
    }
    else{
        console.log("invalid");
    }
}

let user2 = {
    name: "Harsh",
    age:  19,
    gender: "male"
};

greet_2(user2);


