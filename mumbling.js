/*Mumbling
 
This time no story, no theory. The examples below show you how to write function accum:
 
Examples:
 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 
*/
 
 
function accum(s) {
 
  s = s.toLowerCase();
 
  var sList = s.split('');
 
  var newStr = [];
 
  for (i = 0; i < s.length; i++) {
    var newElement = s[i].repeat(i+1);
    newElement = newElement.charAt(0).toUpperCase() + newElement.slice(1);
    newStr.push(newElement);
  }
  return newStr.join('-');
}
