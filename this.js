function checkThis() {
    console.log(this)
}
let obj = {
    a: 10,
    b: 'asdf',
    c: true,
    d: function() {
        console.log(this);
    },
    e: {
        m: 20,
        n: 'jhdh',
        o: function() {
            console.log(this)
        }
    }
}