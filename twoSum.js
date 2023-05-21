//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(array, target) {
//   let indexes = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         indexes.push(i);
//         indexes.push(j);
//       }
//     }
//   }
//   return indexes;
// }

// console.log(twoSum([0, 3, 5, 6, 9], 11));
// since this code runs on loop over a loop
// this function runs O(n^2)
// so it can be optimized

const optimizedTwoSum = (array, goal) => {
  let mapOfNumbers = {};
  let twoIndexes = [];

  for (let i = 0; i < array.length; i++) {
    mapOfNumbers[array[i]] = i;
    console.log('inside the object is', mapOfNumbers);
  }

  for (let i = 0; i < array.length; i++) {
    let target = goal - array[i];
    if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNumbers[target]);
    }
  }

  return twoIndexes;
};
console.log(optimizedTwoSum([0, 3, 5, 6, 9], 11));
