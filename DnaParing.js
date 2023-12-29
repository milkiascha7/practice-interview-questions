{
  /**
    DNA Pairing

    Pairs of DNA strands consist of nucleobase pairs.
    Base pairs are represented by the characters AT and CG, 
    which form building blocks of the DNA double helix.

    The DNA strand is missing the pairing element. 
    Write a function to match the missing base pairs for the provided DNA strand. 
    For each character in the provided string, find the base pair character. 
    Return the results as a 2d array.

    For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

    The character and its pair are paired up in an array, 
    and all the arrays are grouped into one encapsulating array.

    pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

    pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

    pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
}

// function pairElement(str) {
//   const arrayWords = str.split('');
//   const pairs = [];
//   //   console.log(arrayWords);

//   for (let i = 0; i <= str.length; i++) {
//     if (arrayWords[i] === 'G' || 'C') {
//       pairs.push(str[i]);
//       console.log('arraywords', pairs);
//     }
//     // elseif(arrayWords[i]);
//   }

//   return pairs;
// }

function pairElement(str) {
  const paris = {
    A: 'T',
    // T: 'A',
    C: 'G',
    G: 'C',
  };
  return str.split('').map((item) => [item, paris[item]]);
}

// the map function maps each character in the array of individual characters to an array with the character
// and its matching pair, creating a 2D array.

console.log(pairElement('GCG'));
