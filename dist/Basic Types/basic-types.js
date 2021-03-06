"use strict";
// ******* string, number, boolean is types in typescript. All lowercase.
function add(n1, n2, showResult) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
// ******* Object Types
// { age: 30 }
const person = {
    name: 'Max',
    age: 30,
};
console.log(person);
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    },
};
// ******* Array
const arr = [1, 2, 3, 4];
// Tuple
// Special type to tell you that role[0] is number and role[1] is string
const role = [2, 'author'];
// ******* Enum
// after = is your value you want to assign to the enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const roleEnum = Role.ADMIN;
// ******* Any
// Any kind of value
const test = 123;
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
// ***** Function Return Types & "void"
function addition(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
// undefined = return empty;
function printResult2(num) {
    console.log('Result:' + num);
    return;
}
printResult(addition(5, 12));
// ******* Function as Types
// This is not precise
// let combineValues: Function;
// combineValues = add;
// console.log(combineValues(8, 8));
// This is precise
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// ******* unknown
//  unknwon is more restrictive than any type
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
// This won't work so you need to do extra type check like below (if loop);
// userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
// ***** never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const res = generateError('An error occurred!', 500);
console.log(res);
