// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    let sum = 0;
    for (let j = 1; j <= num; j++) {
        console.log('j is', j)
      if (isPrime(j)) {
        sum += j;
        console.log("----> sum is", sum)
      }
    }
    return sum;
  }
  
  // helper function that returns if a number is a prime or not
  function isPrime(n) {
    // base case
    if (n <= 1) return false;

    for (let i = 2; i <= (n/2); i++) {
        console.log('i is', i)
        if (n % i === 0) {
            return false;
        }
    }
    return true;
  }

console.log(sumPrimes(10))

// 10 => 10 + 5 + 2 === 17
// 12 => 12 + 6 + 4 + 3 + 2 === 27