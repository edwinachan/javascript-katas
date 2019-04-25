/* Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  var arr = str.split(' ')
  console.log(arr)
  
  var newString = []

  for (i = 0; i < arr.length; i++) {
    newString.push(arr[i].split('').reverse().join(''))
  }
  return newString.join(' ')
}
