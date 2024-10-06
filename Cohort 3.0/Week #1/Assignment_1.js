
// Assignment 1
// Write a function sum that finds the sum of two numbers. 

function Sum(a, b) {
    total_sum = a + b;
    return total_sum;

}

let ans = Sum(20, 12);
console.log("Sum of A and B is ",ans);   


// Side quest - Try passing in a string instead of a number and see what happens?
function Sum(a, b) {
    total_sum = a + b;
    return total_sum;

}

let c = Sum("Harsh", " Singh");
console.log("Sum of A and B is ",c);


//Assignment 2
//Write a function called canVote that returns true or false if the age of a user is > 18

function canvote(a){
    if (a>18){
        return true;
    }
    else{
        return false;
    }

}

v = canvote(19);
console.log(v);

// Assignment
// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."


function odd_even(a){
    if (a % 2 == 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd")
    }

}
odd_even(22);

// Assignment
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." 
// Otherwise, print "The number is odd."


// for loop
User = ["Harsh", "Kumar", "Singh"]
/*
for (let i = 0; i < 3; i++){
    console.log(User[i])
}

// While loop
*/
let j = 0;
while (j < 3){
    console.log(User[j]);
    j++;
}


// Assignment
// Write a function called sum that finds the sum from 1 to a number

function sum(a){
    let sum = 0;
    for (let i = 1; i <= a; i++){
        sum = sum + i;
    }
    return sum;
}

v = sum(3);
console.log(v);

