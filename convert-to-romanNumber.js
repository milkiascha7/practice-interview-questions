/**
 * 
    Roman Numeral Converter
    Convert the given number into a roman numeral.

    Roman numerals	Arabic numerals
    M	1000
    CM	900
    D	500
    CD	400
    C	100
    XC	90
    L	50
    XL	40
    X	10
    IX	9
    V	5
    IV	4
    I	1
    All roman numerals answers should be provided in upper-case.

    test cases 

    convertToRoman(2) should return the string II.
    convertToRoman(3) should return the string III.
    convertToRoman(4) should return the string IV.
    convertToRoman(5) should return the string V.
    convertToRoman(9) should return the string IX.
    convertToRoman(12) should return the string XII
*/

function convertToRoman(num) {

    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];


   let roman = '';

    //   loop stops when i gets to 0
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {

            console.log("romanNumerals", romanNumerals[i].value)
            roman += romanNumerals[i].symbol;
            console.log("roman", roman)
            
            // since the number is greater than the .value its going to be positive since the loop is executing while bringing number greater or equal to value property
            num -= romanNumerals[i].value;
            console.log("num", num)
            
        }
    }

    return roman;
}
   
console.log(convertToRoman(36));