"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function addAT(a, b) {
    // this is type guards
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // this is type guards
    if ('privileges' in emp) {
        console.log('Privileges ' + emp.privileges);
    }
    // this is type guards
    if ('startDate' in emp) {
        console.log('Start Date ' + emp.startDate);
    }
}
class Car {
    drive() {
        console.log('Driving');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
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
        case 'bird': {
            speed = animal.flyingSpeed;
            break;
        }
        case 'horse': {
            speed = animal.runningSpeed;
        }
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// Type Casting
const paragraph = document.getElementById('message-output');
// Version 1 (works)
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );
// Version 2 (for react)
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
const errorBag = {
    email: 'Not a valid email!',
};
// Function Overloads
// Type Casting but there's a better way.
// const results = addAT(1, 5) as string;
// results.split(' ');
// Add an extra line on top of addAT function
const results = addAT('Test', 'Typescript');
results.split(' ');
// Optional Chaining
const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: {
        title: 'CEO',
        description: 'My own company',
    },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
const userInputAT = '';
const storedData = userInputAT !== null && userInputAT !== void 0 ? userInputAT : 'DEFAULT';
