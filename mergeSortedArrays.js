// given a set of array of numbers return a sorted merged arrays
// input [0,3,4,5,31] & [4,7,30,32] then output would be
// [0,3,4,5,7,30,31] in a sorted manner and no repetition

const arrayFirst = [0, 3, 4, 5, 31];
const arraySecond = [4, 7, 30, 32];

function mergeSortedArrays(array1, array2) {
  const mergedArrays = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1 === 0) {
    return array2;
  }
  if (array2 === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    // since at the last iteration the index has no place after the increment so it will be undefined and will crash it
    // hence the !array2Item
    // becuase when it reaches undefined it will pass the iteration as true and put the index it was being compared to
    if (!array2Item || array1Item < array2Item) {
      mergedArrays.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArrays.push(array2Item);
      array2Item = array1[j];
      j++;
    }
  }
  return mergedArrays;
}

console.log(mergeSortedArrays([0, 3, 4, 5, 31], [4, 7, 30, 32]));

// console.log(mergedArrays);
