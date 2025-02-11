"use strict";
/**
 * Decorators are use for meta-programming
 * - a well suited instrument for writing code which is then easier to use by other developers
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// **** a first class decorator
// enable  "experimentalDecorators": true in tsconfig.json file
// decorator is a function; excuted when the class is instantiate = runs when JS finds the class definition
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
