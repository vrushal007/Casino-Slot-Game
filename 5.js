class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() { // here we haven't used the function keyword
        return this.age >= 18;
    }
}
let p1 = new Person('John', 30);
let p2 = new Person('Jane', 15);
// console.log(typeof p1);
// console.log(p1.__proto__ == Person.prototype); // true
// console.log(p1.__proto__.__proto__ == Object.prototype); // true
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
let s1 = new Student('John', 30, 5);
let s2 = new Student('Jane', 15, 3);

//s1.__proto__ == Student.prototype
//s1.__proto__.__proto__ == Person.prototype

//Inheritance chain
//Object.prototype -> Person.prototype -> Student.prototype
// No inheritance between classes (because they are actually functions)
//Object -x-> Person -x-> Student