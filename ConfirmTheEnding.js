// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// using slice
function confirmEnding(str, target) {
  //   console.log('string', str[2]);
  const newWord = str.slice(str.length - target.length);
  console.log(newWord);
  const validate = newWord === target;
  return validate;
}

console.log(confirmEnding('Bastian', 'n'));

// second method
// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }

// console.log(confirmEnding('Bastian', 'n'));

// If a negative number is provided as the first parameter to slice() ,
// the offset is taken backwards from the end of the string.
