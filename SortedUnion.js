{
  /**

    Sorted Union

    Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

    In other words, all values present from all arrays should be included in their original order, 
    but with no duplicates in the final array.

    The unique numbers should be sorted by their original order, 
    but the final array should not be sorted in numerical order.

    Example

    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
    uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
    uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
    uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
    uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

*/
}

function uniteUnique(arr) {
  const arrgs = [...arguments];

  var newArray = [];

  for (let i = 0; i < arrgs.length; i++) {
    for (let j = 0; j < arrgs[i].length; j++) {
      if (!newArray.includes(arrgs[i][j])) {
        newArray.push(arrgs[i][j]);
      }
    }
  }
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
