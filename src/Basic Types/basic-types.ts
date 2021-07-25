// ******* string, number, boolean is types in typescript. All lowercase.
function add(n1: number, n2: number, showResult?: boolean) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result: number = add(number1, number2);
console.log(result);

// ******* Object Types
// { age: 30 }
const person: { name: string; age: number } = {
  name: 'Max',
  age: 30,
};

console.log(person);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

// ******* Array
const arr: number[] = [1, 2, 3, 4];

// Tuple
// Special type to tell you that role[0] is number and role[1] is string
const role: [number, string] = [2, 'author'];

// ******* Enum
// after = is your value you want to assign to the enum
enum Role {
  ADMIN = 5,
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

const roleEnum = Role.ADMIN;

// ******* Any
// Any kind of value
const test: any = 123;

// ******* Union
// function combine(input1: number | string, input2: number | string) {
//   let result;

//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// const combinedAges = combine(30, 25);
// console.log(combinedAges);

// const combinedNames = combine('Max', 'Anna');
// console.log(combinedNames);

// ***** Literal
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: string
// ) {
//   let result;

//   if (
//     (typeof input1 === 'number' && typeof input2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   // if (resultConversion === 'as-number') {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// const combinedAges = combine(30, 25, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('30', 25, 'as-number');
// console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

// **** Type Aliases

type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: string
) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}

// ***** Function Return Types & "void"

function addition(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:' + num);
}

// undefined = return empty;
function printResult2(num: number): undefined {
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
let combineValues: (n1: number, n2: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// ******* unknown
//  unknwon is more restrictive than any type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// This won't work so you need to do extra type check like below (if loop);
// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput;
}

// ***** never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const res = generateError('An error occurred!', 500);
console.log(res);
