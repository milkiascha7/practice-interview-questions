// Functional programming is a style of programming where solutions are simple, isolated functions,
// without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

// Pure functions - the same input always gives the same output

// Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
// You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value,
// are called first class functions. In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// question
// Implement map on a Prototype

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

// question
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

// solution
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  // OR
  this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
  );

  // Only change code above this line
  return newArray;
};
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// question
// Implement filter on a Prototype

// solution
Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }

    // OR
    // if (callback(this[i], i, this) == true) {
    //   newArray.push(this[i]);
    // }
  }
  // Only change code above this line
  return newArray;
};
