class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  area() {
    throw new Error("The area method must be implemented in the subclass");
  }

  getDescription() {
    return `A shape with color ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  getDescription() {
    return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  getDescription() {
    return `A circle with radius ${this.radius} and color ${this.color}`;
  }
}

const circle = new Circle(20);
console.log(circle.area());

const rect1 = new Rectangle(2, 4, "red");
const area1 = rect1.area();
console.log(area1);
rect1.paint();
console.log(rect1.getDescription());

const circle1 = new Circle(5, "blue");
const area2 = circle1.area();
console.log(area2);
circle1.paint();
console.log(circle1.getDescription());
