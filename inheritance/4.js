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

let x = Object.create(obj);
console.log(str.charAt(2));
console.log(typeof str.charAt); // function
let str2 = 'zxcv'
console.log(str.charAt == str2.charAt); // true -> it means both function referanced from the same place
str.charAt = function() { return 'x' } // does not make any difference

// str.__proto__==String.prototype => charAt fn exist here...

String.prototype.charAt = function() { return 'x' } //now it will only return x
console.log(str.charAt(1), str2.charAt(1))

//String.prototype contains all default string function like charAt, indexOf etc...

// Replace join function
Array.prototype.joinOriginal = Array.prototype.join
Array.prototype.join = function() {
    console.log("join called on", this)
    return this.joinOriginal(...arguments)
}