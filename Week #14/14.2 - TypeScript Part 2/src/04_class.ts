class Shape {
    area(): void {
        console.log("This is the area of the shape");
    }
}

class Circle extends Shape {

    area(): void {
        console.log("This is the area of the circle");
    }

    perimeter(): void {
        console.log("This is the perimeter of the circle");
    }
}

let shape = new Shape();

shape.area(); 
let circle = new Circle();

circle.area(); 
circle.perimeter(); 