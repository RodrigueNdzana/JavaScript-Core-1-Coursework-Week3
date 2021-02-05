/* 
  You are given an statement

  You should remove the word "not" by using .substring() and log the result.

  HINT: You will need to use .substring() twice
*/

let statement = "I do not like programming";
let extra=statement.substring(0,4)   // extra I do like
let restOfStatement=statement.substring(9); // extra like programming
let result = `${extra} ${restOfStatement}`;  // combine the two sentences

console.log(result);

/* EXPECTED OUTPUT 

  "I do like programming"
  
*/
