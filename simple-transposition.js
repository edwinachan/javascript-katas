/*
https://www.codewars.com/kata/57a153e872292d7c030009d4/train/javascript

Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

Complete the function that recieves a string and encrypt it with this simple transposition.

Example
For example if the text to encrypt is: "Simple text", the 2 rows will be:

Row 1	S	m	l		e	t
Row 2	i	p	e	t	x	

So the result string will be: `"Sml etipetx"`

escribe("Basic test", function(){
  it("should work", function(){
    Test.assertEquals(simpleTransposition("Sample text"), "Sml etapetx")
    Test.assertEquals(simpleTransposition("Simple transposition"), "Sml rnpstoipetasoiin")
    Test.assertEquals(simpleTransposition("All that glitters is not gold"), "Alta ltesi o odl htgitr sntgl")
    Test.assertEquals(simpleTransposition("The better part of valor is discretion"), "Tebte ato ao sdsrtoh etrpr fvlri icein")
    Test.assertEquals(simpleTransposition("Conscience does make cowards of us all"), "Cncec osmk oad fu losinede aecwrso sal")
    Test.assertEquals(simpleTransposition("Imagination is more important than knowledge"), "Iaiaini oeipratta nwegmgnto smr motn hnkolde")
  });
});

*/

function simpleTransposition(text) {
  var arr = text.split('')
  
  var rowOne = []
  var rowTwo = []

  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      rowOne.push(arr[i])
    } else if (i % 2 === 1) {
      rowTwo.push(arr[i])
    } //end if
  } //end for

  return rowOne.join('') + rowTwo.join('')
    
} //end function

//More concise solution:

function simpleTransposition(text) {
  let row1 = "";
  let row2 = "";

  for (let i = 0; i < text.length; i++) {
    i % 2 ? (row2 += text[i]) : (row1 += text[i]);
  }

  return row1 + row2;
}
