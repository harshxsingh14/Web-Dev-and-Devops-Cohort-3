var user = {
    name: "harsh",
    age: 21,
    address: {
        city: "New delhi",
        country: "India",
        pincode: 110046
    }
};
function isLegal(user) {
    return user.age >= 18;
}
var ans = isLegal(user);
if (ans) {
    console.log("Legal");
}
else {
    console.log("Illegal");
}
var user2 = {
    name: "ramesh",
    age: 17
};
var ans2 = isLegal(user2);
if (ans2) {
    console.log("Legal");
}
else {
    console.log("Illegal");
}
