// Built in Generics and What are Generics?
const names: Array<string> = ['Max', 'Manuel']; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});

// Creating Generic Function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
mergedObj.age;
