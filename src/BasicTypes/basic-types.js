/**
 * Core Types -> number, string, boolean
 */
// ******* string, number, boolean is types in typescript. All lowercase.
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
/**
 * Typescript Types vs JavaScript Types
 *  - In JS, can use typeof variable (ex: typeof n1 = number) (dynamic type)
 *  - In TS, it can help enforce type during development before compile time (static type)
 */
/**
 * Type Casing
 *  - All core primities types in TS are lowercase
 */
/**
 * Type Assignment & Type Inference
 *  - It's compiler has type inference so variables with value no need to assign type
 */
// ******* Object Types
// { age: 30 }
var person = {
    name: "Max",
    age: 30
};
console.log(person);
var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!"
    }
};
// ******* Array
var arr = [1, 2, 3, 4];
// Tuple
// Special type to tell you that role[0] is number and role[1] is string
var role = [2, "author"];
// ******* Enum
// after = is your value you want to assign to the enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var roleEnum = Role.ADMIN;
// ******* Any
// Any kind of value
var test = 123;
// ******* Union
function combineUnion(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAgesUnion = combineUnion(30, 25);
console.log(combinedAgesUnion);
var combinedNamesUnion = combineUnion("Max", "Anna");
console.log(combinedNamesUnion);
// ***** Literal
function combineLiteral(input1, input2, resultConversion) {
    var result;
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
var combinedAgesLiteral = combineLiteral(30, 25, "as-number");
console.log(combinedAgesLiteral);
var combinedStringAgesLiteral = combineLiteral("30", 25, "as-number");
console.log(combinedStringAgesLiteral);
var combinedNamesLiteral = combineLiteral("Max", "Anna", "as-text");
console.log(combinedAgesLiteral);
function combine(input1, input2, resultConversion) {
    var result;
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
function printResult(num) {
    console.log("Result:" + num);
}
// undefined = return empty;
function printResult2(num) {
    console.log("Result:" + num);
    return;
}
printResult(addition(5, 12));
// ******* Function as Types
// This is not precise
// let combineValues: Function;
// combineValues = add;
// console.log(combineValues(8, 8));
// This is precise
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// ******* unknown
//  unknwon is more restrictive than any type
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// This won't work so you need to do extra type check like below (if loop);
// userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
// ***** never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var res = generateError("An error occurred!", 500);
console.log(res);
