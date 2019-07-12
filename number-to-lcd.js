function lcd(input, w, h) {
    var s = Array.from(input.toString()).map(Number)

    var rows = []

    function changeWidth(array) {
        array.forEach(function(item) {
            if (item.includes('_')) {

                var index = item.indexOf('_')

                if (w > 1) {
                    item.splice(index, 0, '_'.repeat(w-1))
                }

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
                for (i = 0; i < h-1; i++){
                    arrayOfNumsWithHeight.splice(index + indexShift, 0, duplicateRow)
                }
            }
            

            indexShift += h -1

          }

        })
    }

    function convertNumsToArrays(array) {
      array.forEach(function(item) {
        arrayOfNums.push(Array.from(item))
      })
    }

    function generateNumberOfRows() {
        if (h > 1){
            for (i = 0; i < 3 + h + (h-2); i++) {
                rows.push([''])
            }
        } else {
            for (i = 0; i < 3; i++) {
                rows.push([''])
            }
        }
    }

    function generateResult(array) {
        for (i = 0; i < rows.length; i++) {
            rows[i] += array[i].join('')
        }
    }


    generateNumberOfRows()

    for (i = 0; i < s.length; i++) {
        if (s[i] === 1) {
            var one = ['  ' , '| ', '| ']

            var arrayOfNums = []
            convertNumsToArrays(one)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)


        }


        if (s[i] === 2) {
            var two = [' _  ', ' _| ',  '|_  ']
            var arrayOfNums = []
            convertNumsToArrays(two)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }

        if (s[i] === 3) {

            var three = ['_  ', '_| ', '_| ']
            var arrayOfNums = []
            convertNumsToArrays(three)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)

        }

        if ( s[i] === 4) {
            var four = ['    ', '|_| ', '  | ']
            var arrayOfNums = []
            convertNumsToArrays(four)

            changeWidth(arrayOfNums)
            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)

        }

        if (s[i] === 5) {
            var five = [' _  ', '|_  ', ' _| ']
            var arrayOfNums = []
            convertNumsToArrays(five)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }

        if (s[i] === 6) {

            var six = [' _  ', '|_  ', '|_| ']
            var arrayOfNums = []
            convertNumsToArrays(six)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }

        if (s[i] === 7) {

            var seven = ['_  ', ' | ', ' | ']
            var arrayOfNums = []
            convertNumsToArrays(seven)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }

        if (s[i] === 8) {

            var eight = [' _  ', '|_| ', '|_| ']
            var arrayOfNums = []
            convertNumsToArrays(eight)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }

        if (s[i] === 9) {
            var nine = [' _  ', '|_| ', ' _| ']

            var arrayOfNums = []
            convertNumsToArrays(nine)

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)
        }


    }

    var result = ''

    for (i = 0; i < rows.length; i++) {
        result += rows[i] + '\n'
    }

    return result


}

console.log(lcd(2, 2, 2))
