class Person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;
    constructor(fn: string, ln: string, a: number, ia: boolean){
        this.firstName = fn;
        this.lastName = ln;
        this.age = a;
        this.isAlive = ia;
    }
}

let dude = new Person("Rob", "Dunn", 99, true);
console.log(dude);