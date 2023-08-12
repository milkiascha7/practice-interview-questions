// change multiply for loop into a recursive one
// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
// }

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

// change addition for loop into a recursive one

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// sum([2, 3, 4], 1) should equal 2.

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// ANOTHER QUESTION

// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
// The starting number will always be less than or equal to the ending number.
// Your function must use recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const addedNumber = rangeOfNumbers(startNum, endNum - 1);
    addedNumber.push(endNum);
    return addedNumber;
  }
}
