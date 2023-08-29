// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const totalArray = [];
  for (let i = 0; i < arr.length; i += size) {
    totalArray.push(arr.slice(i, i + size));
  }
  return totalArray;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// another method using the while loop
function chunkArrayInGroups(arr, size) {
  const newArr = [];

  // in each iteration it deletes the size number of elements from the front of arr and push them as an array to newArr.
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
