/*
https://www.codewars.com/kata/consonant-value/javascript
-- We shall assign the following values: a = 1, b = 2 ... z = 26.

For example, for the word "zodiacs", solve("zodiacs") = 26
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

describe("Basic tests", function(){
Test.assertEquals(solve("zodiac"),26);
Test.assertEquals(solve("chruschtschov"),80);
Test.assertEquals(solve("khrushchev"),38);
Test.assertEquals(solve("strength"),57);
Test.assertEquals(solve("catchphrase"),73);
Test.assertEquals(solve("twelfthstreet"),103);
Test.assertEquals(solve("mischtschenkoana"),80);
});

var vowels = ['a', 'e', 'i', 'o', 'u']

var ALPHABET = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19, 
  t: 20,
  u: 21,
  v: 22,
  w: 23, 
  x: 24,
  y: 25,
  z: 26
}

function solve(s) {

  var tempString = ''

  //Replace all vowels in string with '-'
  for (i=0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      tempString += '-'
    } else {
      tempString += s[i]
    }
  } //end for loop

  //Split string with '-' as a separator
  var array = tempString.split('-')

  //Remove empty strings as a result of splitting on '-'
  //Remember, an empty string is falsy
  var arrayWithNoEmpty = array.filter(Boolean)


  //Declare new array which will contain the number equivalents to our substirngs
  var arrayWithNumberConversions = []

  arrayWithNoEmpty.forEach(function(item) {

    var sum = 0
    
    for (i=0; i < item.length; i++){

      sum += ALPHABET[item[i]]

    } //end for loop

    arrayWithNumberConversions.push(sum)

    
  }) //end for each

  //Sort in descending order
  var sorted = arrayWithNumberConversions.sort(function(a,b){return b-a})
  
  return sorted[0]
}; //end function
