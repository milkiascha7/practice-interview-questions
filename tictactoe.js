// a simple tic tac toe game that checks if 'X' is the winner or 'O' is the winner

// this can be done using arrays
// the row is the first array
//  the column is the second array

// rules
// the winner can be going and matching the letter from left to right -> [0,0], [0,1], [0,2] for example
// the winner can be going and matching the letter from top to bottom  -> [0,0], [1,0], [2,0] for example
// the winner can be going and matching the letter diagonally as well ->  [0,0], [1,1], [2,2] for example

// this is a multidimensioanl array with letters and index to pin point location and match the letters

// x | O | -
// O | X | -
// - | O | X  here X is the winner diagonally

// this is the first array in the matrix which is the row
function rowCheck(row, letter) {
  // check of the location of the letter is equal to the given letter and return a boolean value

  for (let i = 0; i < 3; i++) {
    if (row[i] != letter) {
      return false;
    }
  }
  //  if the letters match with the index of the value in that array location
  return true;
}

// the column is the second array in the matrix hence the boardmatrix and colindex to pinpoint the location
function colCheck(boardMatrix, colIndex, letter) {
  for (let i = 0; i < 3; i++) {
    // check of the location of the letter is equal to the given letter and return a boolean value
    if (boardMatrix[i][colIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToe(boardMatrix, letter) {
  // check the rows
  var rowWin =
    rowCheck(boardMatrix[0], letter) || // this is going to check all the first rows with the letter
    rowCheck(boardMatrix[1], letter) || // this is going to check all the second rows with the letter
    rowCheck(boardMatrix[2], letter); // this is going to check all the third rows with the letter

  var colWin =
    colCheck(boardMatrix, 0, letter) ||
    colCheck(boardMatrix, 1, letter) ||
    colCheck(boardMatrix, 2, letter);

  // check to win diagonally
  var winDiagonallyLefttoRight =
    boardMatrix[0][0] == letter &&
    boardMatrix[1][1] == letter &&
    boardMatrix[2][2] == letter;

  var winDiagonallyRighttoLeft =
    boardMatrix[0][2] == letter &&
    boardMatrix[1][1] == letter &&
    boardMatrix[2][0] == letter;

  return (
    rowWin || colWin || winDiagonallyLefttoRight || winDiagonallyRighttoLeft
  );
}

var board = [
  ['O', 'X', 'O'],
  ['X', 'O', 'X'],
  ['-', 'X', 'O'],
];

console.log(ticTacToe(board, 'O'));
