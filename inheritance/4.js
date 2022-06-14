let str = "asdf"; // 3 levels from null (str.__proto__.__proto__.__proto__ = null)
let num = 123; // 3 levels from null
let bool = true; // 3 levels from null
let arr = [1, 2, 3]; // 3 levels from null
let obj = { a: 1, b: 'asdf' }; // 2 levels from null (obj.__proto__.__proto__ = null)
let func = function() {}; // 3 level from null (func.__proto__.__proto__.__proto__ = null)

// if x and y are non primitive
// x == y -> true if and only if they are references to the same object in memory

console.log(str.__proto__.__proto__ == obj.__proto__); // true
console.log(num.__proto__.__proto__ == obj.__proto__); // true
console.log(bool.__proto__.__proto__ == obj.__proto__); // true
console.log(arr.__proto__.__proto__ == obj.__proto__); // true
console.log(func.__proto__.__proto__ == obj.__proto__); // true

//Everything indirectly inherits from same thing that obj inherits from
//i.e. in Javascript, everything is essantially an object
//typeof Object.create(Boolean.prototype) -> Object

// console.log(obj.__proto__ == Object.prototype); // true
// console.log(str.__proto__ == String.prototype); // true