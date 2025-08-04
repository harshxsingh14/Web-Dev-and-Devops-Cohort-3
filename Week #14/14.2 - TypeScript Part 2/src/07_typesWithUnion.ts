type Employee = {
    name: string;
    startDate: Date;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee | Manager;

let emp: Employee = {
    name: "Harsh",
    startDate: new Date("2022-09-09")
};

let manager: Manager = {
    name: "Raj",
    department: "IT"
};

let teamLead: TeamLead = {
    name: "Harkirat",
    startDate: new Date("2019-01-01"),
    department: "HR"
};
