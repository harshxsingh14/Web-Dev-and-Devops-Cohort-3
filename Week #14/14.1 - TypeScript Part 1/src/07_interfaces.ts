interface UserType {
    firstName: string,
    lastName: string,
    age: number,
};

function greet(user: UserType) {
    console.log(`Hello ${user.firstName} ${user.lastName}, you are ${user.age} years old.`);
}

let user: UserType = {
    firstName: "Harsh",
    lastName: "Singh",
    age: 21,
};

greet(user);


interface Manager {
    name: string,
    age: number,
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee; 
let t: TeamLead = {
    name: "Harsh",
    age: 21,
    department: "BCA"
}