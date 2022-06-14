// can create objects without defining a class

let bird = {
    x: 100,
    y: 20,
    color: "red",
    eggs: ["one", "two", "three"]
};
console.log(bird.x)
for (i = 0; i < bird.eggs.length; i++) {
    console.log(bird.eggs[i])
}
//forEach loop
bird.eggs.forEach(function(value, index) {
    console.log(index, value)
});

//declare object by using function
function Fruit(taste, color) {
    this.taste = taste;
    this.color = color;
}
let apple = new Fruit("sweet", "red");
let mango = new Fruit("sweet", "yellow");

//declare object by using class declaration
class FruitClass {
    constructor(taste, color) {
        this.taste = taste;
        this.color = color;
    }
}
let kiwi = new FruitClass("sweet", "green");
//declare object by using class expression
let FruitClassExpression = class {
    constructor(taste, color) {
        this.taste = taste;
        this.color = color;
    }
}
let orange = new FruitClassExpression("sweet", "orange");