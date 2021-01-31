/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
function findLongNameThatStartsWithA(name){
  return name.length > 7;   // this will search through an array to see the first value whose names is greater than 7
}
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);
console.log(longNameThatStartsWithA);

/* Another ways of doing this using EcmaScript 6 (ES 6) arrow function
const longerName=names.find(findLonger => findLonger.length > 7)
console.log(longerName);*/

/* EXPECTED OUTPUT */
// "Alexandra"
