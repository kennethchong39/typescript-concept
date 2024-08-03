"use strict";
let user1;
user1 = {
    name: "Ken",
    age: 26,
    greet(phrase) {
        console.log(phrase);
    },
};
user1.greet("printing");
class PersonC {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let addF;
addF = (n1, n2) => {
    return n1 + n2;
};
/**
 * interfaces can't be instantiated and are not compiled, classes can be instantiated and are compiled
 */
