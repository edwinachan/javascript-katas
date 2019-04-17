/*Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

var a = 123

function squareDigits(num){
  var arr = (num).toString().split('').map(Number)

  var newArr = '';

  for (i = 0; i < arr.length; i++) {
    var arrSq = arr[i]*arr[i]
    newArr += arrSq
  }

  return Number(newArr)
}

squareDigits(a);
