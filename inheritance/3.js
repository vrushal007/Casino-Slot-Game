let obj1 = {
    a: 10,
    b: 20,
    c: 30
}
let obj2 = Object.create(obj1); //prototype based inheritance
console.log("obj2 == obj1 ->", obj2 == obj1, ", obj2.__proto__== obj1 -> ", obj2.__proto__ == obj1);
obj2.p = 'abc';
obj2.q = 'def';
obj2.r = 'ghi';
let obj3 = Object.create(obj2);

//obj3.__proto__ == obj2 
// obj3.__proto__.__proto__ == obj1
/*
    obj1.a++; // it will increment a by 1
    obj2.a++; // it will follow obj2.a = obj2.a + 1 and hence a=12 will add as a new key-value in obj2
*/

/*
         obj2.a -> it will try to find a in obj2
                -> if not found,
                -> it will try to find it in obj2.__proto__
                -> if not found, 
                -> it will try to find it in ob2.__proto__.__proto__
                -> and so on...
                -> till __proto__ becomes null

    */