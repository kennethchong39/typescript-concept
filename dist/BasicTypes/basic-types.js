"use strict";
/**
 * Core Types -> number (no differentiation between integers and floats), string, boolean
 */
// ******* string, number, boolean is types in typescript. All lowercase.
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    return n1 + n2;
}
let num = 3;
const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
add(number1, number2, true);
/**
 * Typescript Types vs JavaScript Types
 *  - In JS, can use typeof variable (ex: typeof n1 = number) (dynamic type)
 *      - fail in runtime
 *  - In TS, it can help enforce type during development before compile time (static type)
 *      - fail in development time instead of runtime
 */
/**
 * Type Casing
 *  - All core primities types in TS are lowercase
 */
/**
 * Type Assignment & Type Inference
 *  - It's compiler has type inference so variables with value no need to assign type
 *
 *  - type inference:
 *      let num1: number;
 *       num1 = 5;
 */
// ******* Object Types
// { age: 30 }
// "object" isn't a good practice as it doesn't explicitly tell us what is inside the object
const personObj = {
    name: "Max",
    age: 30,
};
// a better way is to explicitly label each key in the object
const personExObj = {
    name: "Max",
    age: 30,
};
// but we can use type inference instead since this is just a variable; except tuple is available
const person = {
    name: "Max",
    age: 30,
};
console.log(person);
const product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
// ******* Array
const arr = [1, 2, 3, 4];
// ******* Tuple
/**
 * A fixed length array.
 * Special type to tell you that role[0] is number and role[1] is string
 * Using push will still attached to the array because TS can't catch it but array call will be able to do so
 */
const role = [2, "author"];
// ******* Enum
// default to 0, 1, 2 in order
var R;
(function (R) {
    R[R["ADMIN"] = 0] = "ADMIN";
    R[R["READ_ONLY"] = 1] = "READ_ONLY";
    R[R["AUTHOR"] = 2] = "AUTHOR";
})(R || (R = {}));
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
// avoid if possible > it doesn't explicitly tells us what type it is
const test = 123;
// ******* Union
function combineUnion(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAgesUnion = combineUnion(30, 25);
console.log(combinedAgesUnion);
const combinedNamesUnion = combineUnion("Max", "Anna");
console.log(combinedNamesUnion);
// ***** Literal
// a more concrete sub-type of a collective type  such as ("as-number" | "as-text")
function combineLiteral(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
const combinedAgesLiteral = combineLiteral(30, 25, "as-number");
console.log(combinedAgesLiteral);
const combinedStringAgesLiteral = combineLiteral("30", 25, "as-number");
console.log(combinedStringAgesLiteral);
const combinedNamesLiteral = combineLiteral("Max", "Anna", "as-text");
console.log(combinedAgesLiteral);
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
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
// if you don't have a return statement
function printResult(num) {
    console.log("Result:" + num);
}
// undefined = return empty; (required to return)
function printResult2(num) {
    console.log("Result:" + num);
    return;
}
printResult(addition(5, 12));
// ******* Function as Types
// This is not precise / detailed
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
userInput = "Max";
// This won't work so you need to do extra type check like below (if loop);
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
// ***** never
// use never when the fn never produce a value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const res = generateError("An error occurred!", 500);
console.log(res);
