/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";

statement = statement.substring(18,0); // NB: if start is greater than end this ,method will swap the two argument meaning statement.substring(18,0) == statement.substring(0,18) 

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
