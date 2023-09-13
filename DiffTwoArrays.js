{
  /**
    Diff Two Arrays

    Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
    In other words, return the symmetric difference of the two arrays.

    Example ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
    ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
    should return ["pink wool"]
*/
}

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

// another method using concat and filter
{
  /** merge the array into one and filter them */
}

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter((item) => !arr1.includes(item) || !arr2.includes(item));
// }

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
