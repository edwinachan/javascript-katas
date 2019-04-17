str = 'sbefyawhiqrluHxvcgzkpodtjmn !';
 
function isIsogram(str){
 
  var newStr = str.toLowerCase();
 
  if (str === '') {
    return true;
  }
 
  var letterCount = 0;
 
  for (i = 0; i < newStr.length; i++) {
    var count = newStr.split(newStr[i]).length-1;
    if (count > 1) {
      letterCount ++;
    }
  }
 
  if (letterCount > 1) {
    return false;
  }
  else {return true;}
}
 
console.log(isIsogram(str));
 
 
 
var exampleString = 'I will practice this';
 
var count = exampleString.split('L').length-1;
 
var result = 'L appears ' + count + ' times';
