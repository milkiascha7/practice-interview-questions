function findLongestWordLength(str) {
  let arrayWords = str.split(' ');
  console.log('arrayWords', arrayWords);

  let maxLength = 0;
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > maxLength) {
      maxLength = arrayWords[i].length;
      console.log(maxLength);
    }
  }
  console.log('final answer', maxLength);
  //   return arrayWords.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
