// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// using loops
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
    console.log(product);
  }
  return product;
}

factorialize(5);

// using recursive function
function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
