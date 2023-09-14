// Wherefore art thou
{
  /**
    Make a function that looks through an array of objects (first argument) and 
    returns an array of all objects that have matching name and value pairs (second argument).
    Each name and value pair of the source object has to be present in the object from the collection 
    if it is to be included in the returned array.


    For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
    and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
    because it contains the name and its value, that was passed on as the second argument.
*/
}

// this will work for the given example but has issues with all the test cases
// function whatIsInAName(collection, source) {
//   const newArray = [];
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].last === source.last) {
//       newArray.push(collection[i]);
//       return newArray;
//     }
//   }
// }

function whatIsInAName(collection, source) {
  // What's in a name?
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}

// using another method with filter
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Montague' }
  )
);
