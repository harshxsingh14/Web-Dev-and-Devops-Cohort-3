type SumInput = string | number; 

function sum(a: SumInput, b: SumInput): SumInput {

    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }

    return a + b;
}

console.log(sum(1, 2)); // 3


type Employee = {
    name: string;
    startDate: Date;
};


type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager; s:
const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software Developer",
};

console.log(teamLead);