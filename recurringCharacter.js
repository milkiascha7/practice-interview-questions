// google question
// FIRST RECURRING CHARACTER
// given an array = [2, 5, 1,2, 3, 5,1,2,4]
// it should return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// given an array = [2, 3,4,5]
// it should return undefined

function naiveRecurringCharacter(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
}
// console.log(naiveRecurringCharacter([2, 3, 4, 5, 3, 6]));
// O(n^2)

// ---------------------------------

// better approach
function recurringCharacter(array) {
  let charObj = {};

  for (let i = 0; i < array.length; i++) {
    if (charObj[array[i]]) {
      console.log('item is', charObj);
      return array[i];
    } else {
      charObj[array[i]] = true;
    }
    console.log('hash is', charObj);
  }
  return undefined;
}

console.log(recurringCharacter([2, 3, 4, 5, 3, 6]));
