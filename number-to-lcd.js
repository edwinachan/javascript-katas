function lcd(input, w, h) {
    var s = Array.from(input.toString()).map(Number)
    console.log(s)

    var rows = []

    function changeWidth(array) {
        array.forEach(function(item) {
            if (item.includes('_')) {

                var index = item.indexOf('_')

                item.splice(index, 0, '_'.repeat(w-1))

            } else if (!('_').includes(item) && item[0] === '|') {

                item.splice(item.length-1, 0, ' '.repeat(w-1))
            } else if (!('_').includes(item) && item[item.length-2] === '|') {
                item.splice(0, 0, ' '.repeat(w-1))
            } else {
              item.splice(0, 0, ' '.repeat(w-1))
            }
        })
    }

    function changeHeight(array) {

        var indexShift = 0

        array.forEach(function(item) {

          var index = array.indexOf(item)

          if (item.includes('|')) {
            var duplicateRow = item.slice()

            for (i = 0; i < duplicateRow.length; i++) {
              if (duplicateRow[i] !== '|') {
                duplicateRow[i] = ' '
              }
            }


            if (h > 1) {
                for (i = 0; i < h; i++){
                    arrayOfNumsWithHeight.splice(index + indexShift, 0, duplicateRow)
                }
            }
            

            indexShift += h

          }

        })
    }

    function convertNumsToArrays(array) {
      array.forEach(function(item) {
        arrayOfNums.push(Array.from(item))
      })
    }


    var row1 = ''
    var row2 = ''
    var row3 = ''
    var row4 = ''
    var row5 = ''
    var row6 = ''
    var row7 = ''

    for (i = 0; i < s.length; i++) {
        if (s[i] === 1) {
            var one = ['  ' , '| ', '| ']

            var arrayOfNums = []
            convertNumsToArrays(one)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')


        }


        if (s[i] === 2) {
            var two = [' _  ', ' _| ',  '|_  ']
            var arrayOfNums = []
            convertNumsToArrays(two)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            row1 += arrayOfNumsWithHeight[0].join('')
            row2 += arrayOfNumsWithHeight[1].join('')
            row3 += arrayOfNumsWithHeight[2].join('')
            row4 += arrayOfNumsWithHeight[3].join('')
            row5 += arrayOfNumsWithHeight[4].join('')
            row6 += arrayOfNumsWithHeight[5].join('')
            row7 += arrayOfNumsWithHeight[6].join('')

        }

        if (s[i] === 3) {
            var three = ['_  ', '_| ', '_| ']
            var arrayOfNums = []
            convertNumsToArrays(three)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            row1 += arrayOfNumsWithHeight[0].join('')
            row2 += arrayOfNumsWithHeight[1].join('')
            row3 += arrayOfNumsWithHeight[2].join('')
            row4 += arrayOfNumsWithHeight[3].join('')
            row5 += arrayOfNumsWithHeight[4].join('')

        }

        if ( s[i] === 4) {
            var four = ['    ', '|_| ', '  | ']
            var arrayOfNums = []
            convertNumsToArrays(four)

            changeWidth(arrayOfNums)
            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            row1 += arrayOfNumsWithHeight[0].join('')
            row2 += arrayOfNumsWithHeight[1].join('')
            row3 += arrayOfNumsWithHeight[2].join('')
            row4 += arrayOfNumsWithHeight[3].join('')
            row5 += arrayOfNumsWithHeight[4].join('')

        }

        if (s[i] === 5) {
            var five = [' _  ', '|_  ', ' _| ']
            var arrayOfNums = []
            convertNumsToArrays(five)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
        }

        if (s[i] === 6) {

            var six = [' _  ', '|_  ', '|_| ']
            var arrayOfNums = []
            convertNumsToArrays(six)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
        }

        if (s[i] === 7) {

            var seven = ['_  ', ' | ', ' | ']
            var arrayOfNums = []
            convertNumsToArrays(seven)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
        }

        if (s[i] === 8) {

            var eight = [' _  ', '|_| ', '|_| ']
            var arrayOfNums = []
            convertNumsToArrays(eight)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
        }

        if (s[i] === 9) {
            var nine = [' _  ', '|_| ', ' _| ']

            var arrayOfNums = []
            convertNumsToArrays(nine)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
        }


    }


    return row1 + '\n' + row2 + '\n' + row3 + '\n' + row4 + '\n' + row5 + '\n' + row6 + '\n' + row7
}

console.log(lcd(2, 2, 2))


