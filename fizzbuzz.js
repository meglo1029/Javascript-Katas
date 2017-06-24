// If no arguments are passed, the value at the index of the array for the 
// number should be 'Fizz' if it is divisible by 3, 'Buzz' if divisible by 5, 
// 'FizzBuzz' if it divisible by both 3 and 5, or the number if it is not divisible by 3 or 5.

// The method should take up to 4 arguments:

// The first and second arguments are strings, which should be 'Fizz' and 'Buzz' by default.

// The third and fourth arguments are integers and and should be 3 and 5 by default.




var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
  stringOne = stringOne || 'Fizz';
  stringTwo = stringTwo || 'Buzz';
  numOne = numOne || 3;
  numTwo = numTwo || 5;

  var ret = []
  for (var i = 1; i <= 100; ++i) {
    if (i % numOne === 0 && i % numTwo === 0) {
      ret.push(stringOne + stringTwo);
    } else if (i % numOne === 0) {
      ret.push(stringOne);
    } else if (i % numTwo === 0) {
      ret.push(stringTwo);
    } else {
      ret.push(i);
    }
  }
  return ret;
};