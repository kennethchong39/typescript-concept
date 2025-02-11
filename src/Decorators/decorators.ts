/**
 * Decorators are use for meta-programming
 * - a well suited instrument for writing code which is then easier to use by other developers
 */

// **** a first class decorator
// enable  "experimentalDecorators": true in tsconfig.json file

// decorator is a function; excuted when the class is instantiate = runs when JS finds the class definition
function Logger(constructor: Function) {
  console.log("Logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

// **** working with decorator factory
function LoggerOne(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerOne("LOGGING - PERSON")
class PersonOne {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const persOne = new PersonOne();
console.log(persOne);

// ***** building more useful decorators
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@WithTemplate("<h1> My Person Object </h1>", "app")
class PersonTwo {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const persTwo = new PersonTwo();
console.log(persTwo);

// **** adding multiple decorators

// multiple decorators - the execution run from bottom up. However the creation of the decorators are based on which function is set first (aka top down).

@Logger
@WithTemplate("<h1> My Person Object </h1>", "app")
class PersonThree {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const persThree = new PersonThree();
console.log(persThree);

// ***** diving into property decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// **** accessor, method, & parameter decorator
function LogOne(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class ProductOne {
  @Log
  title: string;
  private _price: number;

  // adding decorators to accessors
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  // adding method decorator (Log3) and adding parameter decorator (Log4)
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// **** when do decorators execute
/**
 * Decorators execute when you define the class
 */

// **** returning a class in a class decorator
function WithTemplateOne(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("Rendering template");
    // returninig a class in a class decorator
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// **** create an "Autobind" decorator
/**
 * Purpose: given addEventListener calling the Printer class with a function that consists of "this" keyword. The p.showMessage's this will point to the addEventListener instead of the class itself. In order to fix that, we should be using the Autobind function that pass the this through Method decorators
 */
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const buttons = document.getElementById("button-1")!;
buttons?.addEventListener("click", p.showMessage);
// console.log(document);

// ***** decorators for validation
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid &&= !!obj[prop];
        case "positive":
          isValid &&= obj[prop] > 0;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
