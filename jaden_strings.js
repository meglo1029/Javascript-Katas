// INSTRUCTIONS:
// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in 
// the same way he originally typed them.


String.prototype.toJadenCase = function () {

sentence = this.split(" ");

for (i=0; i<sentence.length; i++){
  sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substr(1,sentence[i].length-1);
  }
  	return jaden = sentence.join(" ");
};