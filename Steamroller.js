// Flatten a nested array. You must account for varying levels of nesting.


// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

function steamRoller(arr){
    const flattenedArray = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            console.log(Array.isArray(arr[i]))
            console.log(   "flatten array that is pushed",...steamRoller(arr[i])   )
            flattenedArray.push(...steamRoller(arr[i]))
            // flattenedArray.push(arr[i]);
            // return true
        }else {
            // Copy contents that are not arrays
            flattenedArray.push(arr[i]);
        }
        
    }
    return flattenedArray
}

console.log(steamRoller([1, [2], [3, [[4]]]]))