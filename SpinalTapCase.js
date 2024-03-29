// Spinal Tap Case
{
  /**
    Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.] 

    spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap
    spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show
*/
}

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

// test here
spinalCase('This Is Spinal Tap');

{
  /**
    regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
    The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
    While returning the string, another replace() replaces spaces and underscores with dashes using regex. */
}

// another simple method
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}
