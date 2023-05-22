// Given an integer array nums, find the subarray
// with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// function maxSubarray(nums) {
//   let largestSum = 0;
//   let max = -Infinity;

//   for (i = 0; i < nums.length; i++) {
//     largestSum = Math.max(largestSum + nums[i], nums[i]);
//     console.log(largestSum);

//     max = Math.max(max, largestSum);

//     console.log('maxNum is', max);
//   }

//   return max;
// }
// console.log(maxSubarray([-4, -2, 0, 3, 5, 6, 9]));

var maxSubArray = function (nums) {
  let max = -Infinity;
  let meh = 0;
  for (let i = 0; i < nums.length; i++) {
    meh += nums;
    console.log(meh);
    if (meh > max) {
      max = meh;
    }
    if (meh < 0) {
      meh = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-4, -2, 0, 3, 5, 6, 9]));
