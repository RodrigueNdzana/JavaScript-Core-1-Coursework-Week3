/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// create a function
function checkValue(element){
  // check if there are any multiple of 5 and 3 in the array and log the value "FizzBuzz" if the condition is true
  if(element % 5 == 0 && element % 3 == 0){
    console.log("FizzBuzz");
  }
  //check for the multiple of 3
  else if(element % 3 == 0){
    console.log("Fizz");
  // Check for multiple of 5
  }else if(element % 5 == 0){
    console.log("Buzz");
  }
  // otherwise print the element
  else{
    console.log(element);
  }
}
arr.forEach(checkValue); // call the function inside the forEach method to execute the above code

// another solution using the switch statement
/*function checkValue(element) {
  switch(true){
    case (element % 5 ===0 && element % 3 === 0):
      console.log("FizzBuzz");
      break;
    case (element % 3===0):
      console.log("Fizz");
      break;
    case (element % 5===0):
      console.log("Buzz");
      break;
    default:
      console.log(element);
    
  }
}
arr.forEach(checkValue);
*/
/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
