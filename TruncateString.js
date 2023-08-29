// Truncate a String

function truncateString(str, num) {
  if (str.length > num) {
    let newArray = str.slice(0, num);
    return newArray + '...';
  } else return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
