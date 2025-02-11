"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addAT(a, b) {
    // this is type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // this is type guards
    if ("privileges" in emp) {
        console.log("Privileges " + emp.privileges);
    }
    // this is type guards
    if ("startDate" in emp) {
        console.log("Start Date " + emp.startDate);
    }
}
class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird": {
            speed = animal.flyingSpeed;
            break;
        }
        case "horse": {
            speed = animal.runningSpeed;
        }
    }
    console.log("Moving with speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
// Type Casting
const paragraph = document.getElementById("message-output");
// Version 1 (works)
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );
// Version 2 (for react)
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
const errorBag = {
    email: "Not a valid email!",
};
// Function Overloads
// Type Casting but there's a better way.
// const results = addAT(1, 5) as string;
// results.split(' ');
// Add an extra line on top of addAT function
const results = addAT("Test", "Typescript");
results.split(" ");
// Optional Chaining
const fetchUserData = {
    id: "u1",
    name: "Max",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
const userInputAT = "";
const storedData = userInputAT !== null && userInputAT !== void 0 ? userInputAT : "DEFAULT";
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
/**
 * What is object oriented programming?
 *
 * - work with (real life) entities in your code
 * - to reasons about your code
 * - a programming model that organizes code around objects
 *
 * - Objects
 *  - the things you work with in code
 *  - instances of classes (=based on classes)
 *  - class-based creation is an alternative to using object literals.
 *
 * - Classes
 *  - blueprints for objects
 *  - define how objects look like , which properties and methods they have
 *  - classes make creation multiple, similar objects much easier
 */
// ******* creating a first class
class Department {
    // shorthand initialization
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ` + this.name);
    }
    /**
     * below help to ensure the this.name is filled when you called with another copy of object (see accountingCopyOne)
     */
    // describe(this: Department) {
    //   console.log("Department: " + this.name);
    // }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const accounting = new Department("1", "Accounting");
console.log(accounting);
// output: Department: Accounting
accounting.describe();
// this is pointing to where is being called, hence this will return undefined
// output: Department: undefined;
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
// reference #40
// const accountingCopyOne = { name: "Dummy", describe: accounting.describe };
// accountingCopyOne.describe();
// ***** private and public access modifies
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
// private so you can't access employee directly such as below:
// accounting.employees[2] = 'Anna';
accounting.printEmployeeInformation();
// public properties do not need to be label by default.
// ***** shorthand initialization
/**
 * two ways to create constructor
 *
 * constructor(n: string) { this.name = n; }
 *
 * constructor(private id: string, public name: string) {}
 *
 */
// ***** readonly property
// you can add it to the constructor
// provide extra safety to make it really clear certain property should only be initialized once and shouldn't chnage thereafter
class ITDepartment extends Department {
    constructor(id, admins) {
        // calls the constructor base class
        super(id, "IT");
        this.admins = admins;
    }
}
const infoTechDeparment = new ITDepartment("information technology", ["admin"]);
console.log(infoTechDeparment);
infoTechDeparment.describe();
class AccountingDepartment extends Department {
    // encapsulate the idea to return the value
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report data");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport() {
        console.log(this.reports);
    }
}
const acc = new AccountingDepartment("d2", []);
acc.addReport("Something went wrong");
acc.printReport();
// **** overriding properties and protected modifiers
/**
 * if you try to access a private property from Department class in AccountingDepartment class you will get error because it is only accessible by where it was defined
 *
 * to avoid the above, we can use protected instead of private.
 */
acc.addEmployee("Ken");
acc.printEmployeeInformation();
// ***** getters and setters
// allow you to get access to private property if needed
const report = acc.mostRecentReport;
console.log("report", report);
console.log("testing");
// acc.mostRecentReport = "";
acc.mostRecentReport = "year end report";
// ***** static methods and properties
/**
 * can call static methods directly on the class without "new" keyword
 */
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
/**
 * for you to access the static method within the class you need to the class.fiscalYear instead of this.fiscalYear
 */
// ***** abstract classes
/**
 * you have to append abstract to the class name and then the describe method like so
 *
 * abstract class Department {
 *    abstract describe(this: Department) : void;
 * }
 *
 * abstract idea is to have every class set it's own decribe method when extending Department
 *
 * a class that can't be instantiated but has to be extended
 */
// ***** singleton and private contructors
/**
 *  the idea is to only create one instance of the class, you can do so by creating a static getInstance function to check
 *
 * you will only ever have one instance of a singleton class
 */
// ***** inheritance
/**
 * allows you to share some common functionality and yet create more specialized blueprints
 */
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
/**
 * Decorators are use for meta-programming
 * - a well suited instrument for writing code which is then easier to use by other developers
 */
// **** a first class decorator
// enable  "experimentalDecorators": true in tsconfig.json file
// decorator is a function; excuted when the class is instantiate
function Logger(constructor) {
    console.log("Logging");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// **** working with decorator factory
function LoggerOne(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let PersonOne = class PersonOne {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
PersonOne = __decorate([
    LoggerOne("LOGGING - PERSON")
], PersonOne);
const persOne = new PersonOne();
console.log(persOne);
// ***** building more useful decorators
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let PersonTwo = class PersonTwo {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
PersonTwo = __decorate([
    WithTemplate("<h1> My Person Object </h1>", "app")
], PersonTwo);
const persTwo = new PersonTwo();
console.log(persTwo);
// **** adding multiple decorators
// multiple decorators - the execution run from bottom up. However the creation of the decorators are based on which function is set first (aka top down).
let PersonThree = class PersonThree {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
PersonThree = __decorate([
    Logger,
    WithTemplate("<h1> My Person Object </h1>", "app")
], PersonThree);
const persThree = new PersonThree();
console.log(persThree);
// ***** diving into property decorators
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
// **** accessor, method, & parameter decorator
function LogOne(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class ProductOne {
    // adding decorators to accessors
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    // adding method decorator (Log3) and adding parameter decorator (Log4)
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], ProductOne.prototype, "title", void 0);
__decorate([
    Log2
], ProductOne.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], ProductOne.prototype, "getPriceWithTax", null);
// **** when do decorators execute
/**
 * Decorators execute when you define the class
 */
// **** returning a class in a class decorator
function WithTemplateOne(template, hookId) {
    return function (originalConstructor) {
        console.log("Rendering template");
        // returninig a class in a class decorator
        return class extends originalConstructor {
            constructor(...args) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
// **** create an "Autobind" decorator
/**
 * Purpose: given addEventListener calling the Printer class with a function that consists of "this" keyword. The p.showMessage's this will point to the addEventListener instead of the class itself. In order to fix that, we should be using the Autobind function that pass the this through Method decorators
 */
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        // so it doesn't show up in for...in loop
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const buttons = document.getElementById("button-1");
buttons === null || buttons === void 0 ? void 0 : buttons.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid && (isValid = !!obj[prop]);
                case "positive":
                    isValid && (isValid = obj[prop] > 0);
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
});
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
// const button = document.querySelector('button');
// const input1 = document.getElementById('num1') as HTMLInputElement;
// const input2 = document.getElementById('num2') as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener('click', function () {
//   console.log(add(+input1.value, +input2.value));
// });
/**
 * typscript is a programming langauge also a "tool" - install a compiler > convert it into js
 *
 * Types
 * Next-gen JS features (compiled down for older Browsers)
 * Non-JS Features like Interfaces or Generics
 * Meta-Programming Features like Decorators
 * Rich Configurations Options
 * Modern Tooling that helps even in non-Typescript Projects
 *
 */
/**
 * Outline
 *
 * - Typscript Basics > Compiler & Configuration Deep Dive > Working with Next-gen JS code > Classes & Interfaces
 * - > Advanced Types and Typescript Features > Generics > Decorators
 * - > working namespaces and modules
 * - > webpack & typescript
 * - > 3rd party libraries & Typescript
 * - >
 */
// using command tsc using-ts.ts to compile
/**
 * Splitting code into multiple files
 *
 * Namespaces & File Bundling
 *  - use namepsace code syntax to group code
 *  - per file or bundled compilation is possible (less imports to manage)
 */
/// <reference path="drag-drop-interfaces.ts"/>
/// <reference path="project-model.ts" />
/**
 * In tsconfig.json, set the outFile to "./dist/bundle.js" and module to "amd" instead of CommonJS
 */
/**
 * to compile ts file - use `tsc file.ts`
 */
/**
 * to use watch mode - use `tsc file.ts --watch`
 */
/**
 * to initialize the project to typescript - use `tsc --init` provides the tsconfig.json
 * to compile entire project - use `tsc`
 */
/**
 * including & excluding files - check out tsconfig.json to include / exclude files
 * files - only specific file will be compiled (advice for only smaller project)
 */
/**
 * es6 essentially allows let/const
 * target = es6
 * if target is set to es6, the default lib is
 *  "lib": [
 *    "DOM",
 *    "ES6",
 *    "DOM.Iterable",
 *    "ScriptHost"
 *  ]
 */
/**
 * sourceMap allows you to see typescript files in the browser's console
 * when debugging (in Sources tab). When compile it creates a .map file. It
 * is later than map by the browser.
 */
/**
 * "outDir" > Redirect output structure to the directory.
 * "rootDir" > Specify the root directory of input files. Use to control the output
 * "noEmitOnError" > avoid generating error TS file in the dist folder
 */
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("clicked");
});
