/*
https://www.codewars.com/kata/lottery-ticket/javascript

Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

Test.describe("Example tests",_=>{
Test.assertEquals(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
Test.assertEquals(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
Test.assertEquals(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
});

*/

function bingo(ticket, win){
    var totalWins = 0

    ticket.forEach(function(item) {

        var letters = item[0] //'ABC'
        var number = item[1] // 74

        for (i = 0; i < letters.length; i++) {
            //if the ASCII code of letter[i] equals number, add 1 to totalWins. We then break as we can only have 1 mini win per subarray
            if (letters.charCodeAt(i) === number) {
                totalWins ++
                break
            } //end if 
        }//end for
    }) //end for each

    var result = (totalWins >= win) ? 'Winner!' : 'Loser!'

    return result
} //end function


//More concisely

function bingo(ticket, win){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
  {
    return "Winner!";
  }
  return "Loser!";
}
