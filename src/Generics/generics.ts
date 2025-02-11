// ***** Built in Generics and What are Generics?

/**
 * generic type is a type connect with some other type and it is flexible regarding which exact type the other type is
 *
 * give flexibility with type safety
 */
const names: Array<string> = ["Max", "Manuel"]; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
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
function merge<T, U>(objA: T, objB: U) {
  // return Object.assign({}, objA, objB);
  return { ...objA, ...objB };
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
function mergeConstraints<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  // return Object.assign({}, objA, objB);
  return { ...objA, ...objB };
}

// enforce the parameter to be object
// const mergedObjConstraints = mergeConstraints({ name: "Max" }, 30);
const mergedObjConstraints = mergeConstraints({ name: "Max" }, { age: 30 });
console.log(mergedObjConstraints);

// **** another generic function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(
  element: T,
  name?: string
): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));

// **** keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// error because object has no name
// console.log(extractAndConvert({}, "name"));
// fix the error above as below
console.log(extractAndConvert({ name: "Ken" }, "name"));

// **** Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === 1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// below code isn't good for object because object is reference in nature so the removeItem no able to remove correct object; except for maxObj since is reference the same memory
// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' }
// objectStorage.addItem({ name: "Max" });
// objectStorage.addItem({ name: "Manu" });
// objectStorage.removeItem({ name: "Manu" });
// console.log(objectStorage.getItems());

// ***** Generic Utility Types
// only available in Typescript and compilation time

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;
  return courseGoal as CourseGoal;
}

// this prevent the namess from add or remove any element etc
const namess: Readonly<string[]> = ["Max", "Anna"];
// namess.push("Manu");
// namess.pop();

// **** Generic Types vs Union Types

// in classes, generic types give more flexiblity to what type is being pass into the class; lock in a specify typr for the class; ex: addItem / removeItem will follow the type being initialized rather than random type.
// with union types, you need to specify each properties and method type when you write the code.
