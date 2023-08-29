// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//   let newString = '';
//   for (i = 0; i < num; i++) {
//     newString += str;
//     console.log(newString);
//   }

//   return newString;
// }

// console.log(repeatStringNumTimes('abc', 3));

// using recursion
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return '';
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

console.log(repeatStringNumTimes('abc', 3));
