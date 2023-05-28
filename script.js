function filterOutOdds() {
  console.log(arguments);
  var nums = Array.prototype.slice.call(arguments);
  console.log(Array.from(arguments));
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//   Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

const filterOutOdds1 = (...nums) => nums.filter((num) => num % 2 === 0);

console.log(filterOutOdds1(1, 2, 3, 44, 6, 5, 10));

// ## **findMin**

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...nums) =>
  nums.reduce((min, num) => (min > num ? (min = num) : min));

console.log(findMin(1, -1));
console.log(findMin(1, 4, 12, -3));
console.log(findMin(3, 1));

// ## **mergeObjects**

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = ({ ...obj1 }, { ...obj2 }) => ({ ...obj1, ...obj2 });

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// ## **doubleAndReturnArgs**

// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...others) => {
  const nums = others.map((num) => num * 2);
  return [...arr, ...nums];
};

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

// ## **Slice and Dice!**

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

console.log(removeRandom([1, 2, 34, 5, 67]));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val });
