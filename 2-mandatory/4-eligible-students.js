/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

function eligibleStudents() {
  let StudentWhoAttend= attendances.filter(students => students[1] >=8);
  return StudentWhoAttend.map(namesOfThoseStudent => namesOfThoseStudent[0])
}
/* Another solution
function eligibleStudents() {
  let emptyArray=[];
  attendances.forEach(function(el){
    while(el[1] >=8){
      emptyArray.push(el[0])
      el++;
    }
  })
  return emptyArray;
}
*/
/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works",
  eligibleStudents(attendances),
  ["Ahmed", "Clement", "Tayoa", "Nina"]
);
