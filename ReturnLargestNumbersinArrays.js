// Return Largest Numbers in Arrays
{
  /**  
    Return an array consisting of the largest number from each provided sub-array. 
    For simplicity, the provided array will contain exactly 4 sub-arrays.
*/
}
function largestOfFour(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log('first array', arr[i][0]);
    let largestArray = arr[i][0];
    // console.log('largestArray', largestArray);
    for (let j = 1; j < arr[i].length; j++) {
      //   console.log('second array', j);
      if (arr[i][j] > largestArray) {
        largestArray = arr[i][j];
      }
    }
    // newArray[i] = largestArray;
    newArray.push(largestArray);
  }
  return newArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// using map and reduce method
function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
