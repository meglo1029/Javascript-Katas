// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
var res = A[0];
  for (var i = 1; i < A.length; i++)
    res ^= A[i];
  return res;
}