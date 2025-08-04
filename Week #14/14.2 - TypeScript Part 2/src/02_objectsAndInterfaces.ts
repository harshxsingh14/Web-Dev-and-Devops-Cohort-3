interface Address { 
    city: string;
    country: string;
    pincode: number;
}

interface User {
    name: string; 
    age: number;
    address?: Address; 
}

interface Office {
    address: Address; 
}

let user: User = {
    name: "harsh",
    age: 21,
    address: {
        city: "New delhi",
        country: "India",
        pincode: 110046
    }
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

let ans = isLegal(user);

if (ans) {
    console.log("Legal"); 
} else {
    console.log("Illegal");
}

let user2: User = {
    name: "ramesh",
    age: 17
}

let ans2 = isLegal(user2);

if (ans2) {
    console.log("Legal");
} else {
    console.log("Illegal"); 
}
