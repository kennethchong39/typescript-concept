interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Ken",
  age: 26,
  greet(phrase) {
    console.log(phrase);
  },
};

user1.greet("printing");

/**
 * Interfaces describe the stucture of the object
 *
 * Type is more flexible since it can do union and intersection
 *
 * Interfaces is super clear you want to define the structure of the object.
 * - it works like a contract where you implement on classes and a class then has to adhere to it
 *
 */

interface Greetable {
  name: String;
  greet(phrase: string): void;
}

class PersonC implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// **** why interface

/**
 * ensure a class has the correct properties and types (the correct structure)
 */

// **** readonly interface properties

interface GreetableOne {
  readonly name: string;
}

/**
 * readonly can read and can't be set
 */

// ***** extend interfaces
interface One {
  readonly name: string;
}

interface Two extends One {
  greet(phrase: string): void;
}

// **** interfaces as function types
interface AddFn {
  (a: number, b: number): number;
}

let addF: AddFn;

addF = (n1: number, n2: number) => {
  return n1 + n2;
};

// **** optional parameters
interface opt {
  op?: string;
  opFn?: () => void;
}

/**
 * interfaces can't be instantiated and are not compiled, classes can be instantiated and are compiled
 */
