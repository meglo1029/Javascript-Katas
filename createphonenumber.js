
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.


function createPhoneNumber(numbers){
  var numbers = numbers.join('')
  return '(' + numbers.substring(0,3) + ') '
  + numbers.substring(3,6)
  + '-'
  + numbers.substring(6);
}