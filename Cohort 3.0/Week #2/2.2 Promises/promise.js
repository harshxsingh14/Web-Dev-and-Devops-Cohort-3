// A Promise in JavaScript is an object that represents the 
// eventual completion (or failure) of an asynchronous operation 
// and its resulting value.


class rectangle{
    constructor(length,breadth,color){
        this.length = length ;
        this.breadth = breadth;
        this.color = color;
    }
    area(){
        const area = this.length * this.breadth;
        return area;
    }

    getcolor(){
        console.log(`the color of rectangle is ${this.color}`);
        
    }
}


const rect = new rectangle(4,5);

const ar = rect.area();
console.log(`the area of rectangle is`,ar);

rect.color = 'red';
rect.getcolor();
