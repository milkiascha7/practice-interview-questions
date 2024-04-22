
// Arguments Optional
// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.




function addTogether() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof(first) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is not defined
    else if (arguments.length === 1) {
      function addSecond(second) {
        // New argument is not a number
        if (typeof(second) !== "number") {
          return undefined;
        }
        // New argument is a number
        else {
          return first + second;
        }
      }
      // Note: returning a *function*
      return addSecond;
    }
    // First argument is a number
    //  and second argument is not a number
    else if (typeof(second) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is a number
    else {
      return first + second;
    }
  }