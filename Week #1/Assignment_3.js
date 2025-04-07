let user_1 = [
    {Name: "Harsh", age: 21, gender: "Male"},
    {Name: "sunita", age: 17, gender: "female"},
    {Name: "keshav", age: 19, gender: "Male"},
    {Name: "videl", age: 24, gender: "female"},
]

let Filter_U = user_1.filter(user => user.age > 18 && user.gender === "Male");

console.log(Filter_U)