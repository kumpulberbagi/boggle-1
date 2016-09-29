// Get the capital letter starting from 0 - 25
function alphabetGenerator(index) {
  var alphaBank = []; // storing character from A - Z capital
  for (var i = 65; i <= 90; i += 1) {
    alphaBank.push(String.fromCharCode(i));
  }
  return alphaBank[index];
}

// Generate random number from 1 to 25
function randomChar() {
  return Math.floor(Math.random()*25);
}

// Get a new character
function shake() {
  return alphabetGenerator(randomChar());
}

function one_array(dimension) {
  var board = [];
  for (var i = 0; i < dimension; i += 1) {
    board.push(shake())
  }
  return board;
}

// Auxilary function for printing bogle
function set_boogle(dimension) {
  var result = [];
  for (var i = 0; i < dimension; i++) {
    result.push(one_array(dimension));
  }
  return result;
}


// Printing current boogle and returning the value
//--> for another function
function print_boogle(dim) {
  var boogle_now = set_boogle(dim)
  console.log(boogle_now)
  return boogle_now;
}
// Testing
print_boogle(2);
print_boogle(3);
print_boogle(4);
print_boogle(10);

// 1000?

//Release II



// function posibleWord(arr) {
//   var possible = []
//   for (var i = 0; i < arr[0].length; i += 1) {
//     possible.push(arr[i][i]);
//     possible.push(arr[i][i+1]);
//     arr.join("")
//     possible.push(arr[i+1][i]);
//   }
//   return console.log(possible);
// }

//console.log(set_boogle(5));
//console.log(print_boogle(5)[0][1]);
//posibleWord(print_boogle(5));
// console.log(shake());
