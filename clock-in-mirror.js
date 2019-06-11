/*
https://www.codewars.com/kata/clock-in-mirror/train/javascript

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22, He knows that the time is 11:38.

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.

describe("Test", function(){
  it("Basic Test", function(){
    Test.assertEquals(WhatIsTheTime("06:35"), "05:25");
    Test.assertEquals(WhatIsTheTime("11:59"), "12:01");
    Test.assertEquals(WhatIsTheTime("12:02"), "11:58");
    Test.assertEquals(WhatIsTheTime("04:00"), "08:00");
    Test.assertEquals(WhatIsTheTime("06:00"), "06:00");
    Test.assertEquals(WhatIsTheTime("12:00"), "12:00");
  });
  
});

*/

function WhatIsTheTime(timeInMirror) {
    var hr = Number(timeInMirror.split(':')[0])
    var min = Number(timeInMirror.split(':')[1])

    var actualMin = (60 - min)
    var actualHr = (12 - hr)

    //If the ORIGINAL minutes wasn't [h]:00 (i.e. 60-0=60), minus 1 from the hr

    actualHr = (actualMin !== 60) ? actualHr  = actualHr - 1 : actualHr

    //If hr is <= 0, add 12 to get to correct hr

    actualHr = (actualHr <= 0) ? actualHr += 12 : actualHr

    //If mins is on the hour, change to 0

    actualMin = (actualMin === 60) ? actualMin = 0 : actualMin

    //format mins and hours display correctly

    actualMin = (actualMin < 10) ? (actualMin = '0' + actualMin) : actualMin
    actualHr = (actualHr <= 1 || actualHr <= 9) ? (actualHr = '0' + actualHr) : actualHr

    actualMin = actualMin.toString()
    actualHr = actualHr.toString()


    return actualHr + ':' + actualMin
} // end function

