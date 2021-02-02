/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let splitString=str.split(''); //this will split the string into substring and return it in the form of an array
  splitString[0]=str[0].toUpperCase(); //this means let the first index in the splitString be in uppercase
  splitString=splitString.join(''); //use the join to join the string
  return splitString;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
