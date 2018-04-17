var Person = (function () {
    function Person(fn, ln, a, ia) {
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
        this.isAlive = ia;
    }
    return Person;
}());
var dude = new Person("Rob", "Dunn", 99, true);
console.log(dude);
