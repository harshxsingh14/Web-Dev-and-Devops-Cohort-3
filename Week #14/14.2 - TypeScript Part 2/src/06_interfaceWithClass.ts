interface People {
    name: string;
    age: number;
    greet: () => string;
    isLegal: () => boolean;
}

class Manager implements People {
    phone: number;

    constructor(public name: string, public age: number) {
        this.phone = 1234567890;
    }

    greet = () => {
        return "Hi " + this.name;
    };

    isLegal() {
        return this.age >= 18;
    }
}

let manager = new Manager("Harsh", 21);

console.log(manager);
console.log(manager.age);

let managerGreeting = manager.greet();
console.log(managerGreeting);

console.log(manager.isLegal());
