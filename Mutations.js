// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// using regex
// function mutation([elem1, elem2]) {
//   const regex = new RegExp(`[^${elem1}]`, 'i');
//   return !regex.test(elem2);
// }

// using indexOf
function mutation(arr) {
  const test = arr[1].toLowerCase();
  console.log('test=>', test);
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    console.log('target', target.indexOf(test[i]));
    // this because the indexOf method returns 1 if true or -1 if false hence the < 0 comparison
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['hello', 'Hello']));
