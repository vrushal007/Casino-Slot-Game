let str = 'Hey! This is Vrushal\'s string';
console.log(str);
let str2 = "Hey! This is Vrushal's string2";
console.log(str2);
let p = 'Vrushal';
let str3 = `Hey! This is ${p}'s string3`;
console.log(str3);
let longString = 'this is \
a very long\
string';
console.log(longString);
//String methods
console.log("String length", str.length);
let s = "this is a string";
let key1 = "is";
let key2 = "was";
console.log("First index of 'is'= ", s.indexOf(key1)); //it will display is of this. Thats why it is 2
console.log("index of 'is' searching starts from 3 = ", s.indexOf(key1, 3)); //it will display is of this. Thats why it is 5
console.log("index of was=", s.indexOf(key2));
console.log("last index=", s.lastIndexOf(key1));

let longString2 = "this-is-a-very-long-string";
let substr2 = longString2.substring(5, 10);
console.log("Substring :", substr2);
let substr = longString2.slice(5, 10); // here 5 is start index and 15 is end index
console.log("Slice :", substr);
let substr3 = longString2.substr(5, 10); // here 1st argument is starting index and 2nd argument is length of string
console.log("Substr :", substr3);