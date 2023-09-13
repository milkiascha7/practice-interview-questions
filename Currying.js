{
  /**
The arity of a function is the number of arguments it requires. 
Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, 
then returns another function that takes the next argument, and so on.
*/
}

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y;

curried(1)(2);

{
  /**
    This is useful in your program if you can't supply all the arguments to a function at one time. 
    You can save each function call into a variable, 
    which will hold the returned function reference that takes the next argument when it's available.
*/
}

{
  /**
Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function 
that is applied to more arguments. Here's an example: */
}

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

function add(x) {
  // Only change code below this line

  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };

  // Only change code above this line
}

add(10)(20)(30);
