// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// example
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


// function palindrome(str) {
//     return true;
//   }
  
// palindrome("eye");


function palindrome(string) {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string');
  }

  // Convert to lowercase and remove non-alphanumeric characters
  let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let reversedString = '';
  let index;

  for (index = processedString.length - 1; index >= 0; index--) {
    console.log("index", index)
    reversedString += processedString[index];
  }

  return reversedString === processedString;
}
  
console.log(palindrome("race car"))