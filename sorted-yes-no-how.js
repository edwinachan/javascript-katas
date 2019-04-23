/* Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/


function isSortedAndHow(array) {
  var asc = array.slice()

  asc.sort(function(a, b){return a-b})
  
  var desc = array.slice()

  desc.sort(function(a, b){return b-a})

  for (i = 0; i < array.length; i++) {
    if (array[i] === asc[i]) {
      return 'yes, ascending'
    } else if (array[i] === desc[i]) {
      return 'yes, descending'
    } else {return 'no'}
  }
}

isSortedAndHow([15, 7, 3, -8])
