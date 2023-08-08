// given 2 arrays, create a function that let's a user know(true/false)
// whether these two arrays contain any common items

// for example
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['x', 'y', 'i']
// should return true

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(arr1*arr2)
// O(1) space complexity

// console.log(containsCommonItem(['a', 'b', 'c', 'w'], ['x', 'y', 'i']));

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array

  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if the item in second array exits on created object
  for (let j = 0; j < arr2.length; j++) {
    console.log([arr2[j]]);
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containsCommonItem2(['a', 'b', 'c', 'x'], ['w', 'y', 'i']));
