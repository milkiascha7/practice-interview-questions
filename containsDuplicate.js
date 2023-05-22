// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true
// Input: nums = [1,2,3,4]
// Output: false

function containsDuplicate(nums) {
  // numbers = {};

  // for (i = 0; i < nums.length; i++) {
  //   numbers[nums[i]] = i;

  //   // if (numbers[i] === nums[i]) {
  //   //   // console.log(nums[i] === i);
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // }

  // values = Object.values(numbers);
  // console.log(numbers);
  // // console.log(numbers);

  // for (let j = 0; j < values.length; j++) {
  //   if (values[j] > 1) {
  //     return true;
  //   }
  // }

  // return false;

  hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      console.log(hash[nums[i]]);
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }
  console.log('hash is', hash);
  return false;
}

console.log(containsDuplicate([990, 40, 20, 10]));
