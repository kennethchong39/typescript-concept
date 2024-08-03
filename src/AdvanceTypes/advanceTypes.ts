// ***** Intersection Types (&)
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// combining two types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards
function addAT(a: number, b: number): number;
function addAT(a: string, b: string): string;
function addAT(a: Combineable, b: Combineable) {
  // this is type guards
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// either Employee or Admin
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";

// this below works too if you don't know is null or not.
// (userInputElement as HTMLInputElement).value = 'Hi there!';

// Index Properties
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  [prop: string]: string;
  // email: 'Not a valid email'
}

const errorBag: ErrorContainer = {
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

console.log(fetchUserData?.job?.title);

// Nullish Coalescing
const userInputAT = "";

const storedData = userInputAT ?? "DEFAULT";
