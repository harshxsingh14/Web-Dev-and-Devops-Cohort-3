class rectangle{
    constructor(height,width,color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area = this.height * this.width;
        return area;
    }

    paint(){
        console.log(`The color is ${this.color}`);
    }

}

const rect = new rectangle(4,3);
rect.color = 'red';
rect.paint();
const area = rect.area();
console.log(area);
 
function print(){
    console.log("this is outer ");
    const gear = 'fifth';
    return gear;
}
function print2(){
    console.log(`inner print is ${print()}`);

}

print2()


//instance of an object is like creating a objects that have been created from a constructor function


const date = new Date();
console.log(date.getFullYear());


const map = new Map();

map.set('name','harsh');
map.set('age',13);

console.log(`the name is ${map.get('name')}`);
