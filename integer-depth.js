/*

https://www.codewars.com/kata/integer-depth/train/javascript

The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

example:

let see n=42

Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed
Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.

*/

function computeDepth (x){
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  var uniqueDigits = []

  var i = 0


  //[0,1,2,3] !== [0,1,2,3] so we must either:
  //a) convert to strings and check for equality
  //b) check each element iteratively, see https://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way/4025958
  
  //toString(10) references base 10. E.g. base 2 are binary numbers
  while (uniqueDigits.toString(10) !== numbers.toString(10)) {

    i++
    
    //Convert number to strings
    //toString(10) references base 10. E.g. base 2 are binary numbers
    //Split into array
    //Call Number on each value in the array
    var mult = (x * i).toString(10).split('').map(Number)

    mult.forEach(function(item) {
      uniqueDigits.push(item)
    })

    //sort in ascending order
    uniqueDigits = Array.from(new Set(uniqueDigits.sort(function(a,b){return a-b})))

    
    if (uniqueDigits.toString(10) === numbers.toString(10)) {
        return i
    } //end if
      
  } //end while

} //end function


