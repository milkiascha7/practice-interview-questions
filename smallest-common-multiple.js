// find the smallest common multiple but with in the range of numbers that are evenly divisible 

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, 
// find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
// The answer here would be 6.

// smallestCommons([1, 5]) should return 60.


// Be careful - do not forget the keyword range. If we are given [1, 5], 
// then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], 
// which is the smallest number that is evenly divisible by all of them.


function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    console.log("numberDivisors", numberDivisors)
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
        console.log("upperBound iterate", upperBound)
    }

    console.log("upperBound total", upperBound)
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {

        console.log("mulitple is", multiple)
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;

          console.log("divisorCount", divisorCount)
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  
  console.log(smallestCommons([1, 5]))