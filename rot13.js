/*
https://www.codewars.com/kata/rot13-1/train/javascript

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

Test.describe("Rot13", function(){
  Test.it("test", function(){
    Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  })    
  Test.it("Test", function(){
    Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
  })
})

*/

var alphabet = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function rot13(message){
  
  var array = message.toLowerCase().split('')

  var newArray = []
  
  array.forEach(function(item) {

    if ((/[a-zA-z]/.test(item)) === false) {
      //if character is not a letter, just add it to newArray
      newArray.push(item)
    } else {
      var letterIndex = alphabet.indexOf(item)
      var newIndex = letterIndex + 13

      //Use modulus to start again if newIndex exceeds 26
      if (newIndex > 26) {
        newIndex = newIndex % 26
      } //end if

      newArray.push(alphabet[newIndex])
      }
    }) //end for each

  //We converted to lower case at the start of the function
  //Check if we need to convert any characters back to to upper case
  for (i=0; i < message.length; i++) {
    if (message[i] === message[i].toUpperCase() && message[i] !== message[i].toLowerCase()) {
      newArray[i] = newArray[i].toUpperCase()
    }
  } //end for
  
  return newArray.join('')
}
