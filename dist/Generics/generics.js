"use strict";
// ***** Built in Generics and What are Generics?
/**
 * generic type is a type connect with some other type and it is flexible regarding which exact type the other type is
 *
 * give flexibility with type safety
 */
const names = ["Max", "Manuel"]; // string[]
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
// **** Creating Generic Function
/**
 * T & U is a generic type based on what it is passed when you called it
 */
function merge(objA, objB) {
    // return Object.assign({}, objA, objB);
    return Object.assign(Object.assign({}, objA), objB);
}
// const mergedObj = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 30 }
// );
// console.log(mergedObj.age);
// compared with the above comment, this below typescript will auto infer the types when calling merge
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
// ***** Working with constraints
function mergeConstraints(objA, objB) {
    // return Object.assign({}, objA, objB);
    return Object.assign(Object.assign({}, objA), objB);
}
// enforce the parameter to be object
// const mergedObjConstraints = mergeConstraints({ name: "Max" }, 30);
const mergedObjConstraints = mergeConstraints({ name: "Max" }, { age: 30 });
console.log(mergedObjConstraints);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));
// **** keyof constraint
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
// error because object has no name
// console.log(extractAndConvert({}, "name"));
// fix the error above as below
console.log(extractAndConvert({ name: "Ken" }, "name"));
// **** Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === 1) {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorag = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;
    return courseGoal;
}
// this prevent the namess from add or remove any element etc
const namess = ["Max", "Anna"];
// namess.push("Manu");
// namess.pop();
// **** Generic Types vs Union Types
// in classes, generic types give more flexiblity to what type is being pass into the class.
// with union types, you need to specify each properties and method type when you write the code.
