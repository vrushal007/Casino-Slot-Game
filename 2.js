function outer(arg1) {
    let var1 = 10;

    function inner(arg2) {
        let var2 = 20;
        console.log(arg1, var1, arg2, var2);
        // console.log("argument[0]", arguments[0])
    }
    return inner;
}
// console.log(arg1)
let x = outer('param1');
//typeof x; // 'function'
x('param2');