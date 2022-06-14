// let arr = ["Apple", "Mango", "Guava", "Berry"];
// console.log("length", arr.length)
// console.log(arr)
// console.log("length", arr["length"])
// console.log("pushing element Watermelon")
// arr.push("Watermelon")
// console.log(arr)
// console.log("index of mango", arr.indexOf("Mango"))
// console.log("pop the last element :", arr.pop())
// console.log(arr)
// console.log("Pop the first element", arr.shift())
// console.log(arr)
// console.log("Add element at front:", arr.unshift("Kiwi"))
// console.log(arr)


//array methods

//slice
// let arr2 = ["ab", "cd", "ef", "gh", "ij", "kl"];
// console.log(arr2.slice(3))
// console.log(arr2) //it will not change the original array

//splice
let arr3 = ["ab", "cd", "ef", "gh", "ij", "kl"];
// let omitted = arr3.splice(3, 2);
// console.log(omitted) //it will remove 2 elements from index 3
// console.log(arr3) //it will change the original array and remove 2 elements from index 3


let replaced = arr3.splice(3, 2, "mn", "op");
console.log(replaced) //it will remove 2 elements from index 3 and replace them with mn and op
console.log(arr3) //it will change the original array and remove 2 elements from index 3 and replace them with mn and op

//concat
let arr4 = ["ab", "cd", "ef", "gh", "ij", "kl"];
let arr5 = ["mn", "op"];
console.log(arr4.concat("mn", "op")) //it will not change the original array
console.log(arr4.concat(arr5)) //it will not change the original array
console.log(arr4) //it will not change the original array