/**
 *Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 *
 * example
 * convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana
 */

//  using a for loop with switch case to assign the array index value
function convertHTML(str) {
  var temp = str.split('');

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

console.log(convertHTML('Dolce & "Gabbana " > < &'));
