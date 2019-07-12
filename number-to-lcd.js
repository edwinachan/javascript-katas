function lcd(input, w) {
    var s = Array.from(input.toString()).map(Number)

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

    function convertNumsToArrays(array) {
      array.forEach(function(item) {
        arrayOfNums.push(Array.from(item))
      })
    }

    var row1 = ''
    var row2 = ''
    var row3 = ''
    var arrayOfNums = []

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

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')



        }

        if (s[i] === 3) {
            var three = ['_  ', '_| ', '_| ']
            var arrayOfNums = []
            convertNumsToArrays(three)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')

        }

        if ( s[i] === 4) {
            var four = ['    ', '|_| ', '  | ']
            var arrayOfNums = []
            convertNumsToArrays(four)

            changeWidth(arrayOfNums)

            row1 += arrayOfNums[0].join('')
            row2 += arrayOfNums[1].join('')
            row3 += arrayOfNums[2].join('')
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

    return row1 + '\n' + row2 + '\n' + row3
}

console.log(lcd(345, 2))
