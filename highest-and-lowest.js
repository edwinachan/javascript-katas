/* Highest and Lowest
 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 
Example:
 
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:
 
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 
*/
 
function highAndLow(numbers) {
 
  var array = numbers.split(" ");
 
  var newArray = [];
 
  for (i = 0; i < array.length; i++) {
    newArray.push(Number(array[i]));
  }
 
  console.log(newArray);
 
  newArray.sort(function(a, b){return b-a});
 
  console.log(newArray);
 
  return newArray[0].toString() + " " + newArray[newArray.length - 1].toString();
 
}
 
numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6";
 
highAndLow(numbers);
