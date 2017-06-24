// INSTRUCTIONS: Implement the function unique_in_order which takes as 
// argument a sequence and returns a list of items without any elements with the
//  same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  var answer = [];
  var i = 0;
  
  while (i<iterable.length){
    if (iterable[i] !== iterable[i+1]){
      answer.push(iterable[i])
    }
    i++;
  }
  return answer;
}