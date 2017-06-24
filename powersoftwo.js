// Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
  var output = [];
  for(var i = 0; i <= n; i++){
   output.push(Math.pow(2, i));
  }
  return output;
}