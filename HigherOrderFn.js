function createGreeter(greeting) {

    function greet(name) {
        document.getElementById('result').innerHTML = greeting + ' ' + name();
    }
    return greet;
}

function getName() {
    return document.getElementById('name').value;
}

function displayName() {
    document.getElementById('result').innerHTML = getName();
}
let g1 = createGreeter('Good Morning');
let g2 = createGreeter('Good Evening');
// console.log(greeter('John'));