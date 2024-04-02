{
  /**
    Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


Waiting:sumFibs(1) should return a number.
Waiting:sumFibs(1000) should return 1785.


sumFibs(4) should return 5.


*/
}

function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      // this means its an odd number since it can't be divisible by two
      // Check if current number is odd
      sum += curr;
    }
    // Calculate the next Fibonacci number
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

console.log(sumFibs(4));
