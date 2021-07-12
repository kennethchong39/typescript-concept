// string, number, boolean is types in typescript. All lowercase.
function add(n1, n2, showResult) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
// Object Types
// { age: 30 }
var person = {
    name: 'Max',
    age: 30
};
console.log(person);
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
// Array
var arr = [1, 2, 3, 4];
