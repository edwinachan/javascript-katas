var digits = {
    1: ['  ' , '| ', '| '],
    2: [' _  ', ' _| ',  '|_  '],
    3:  ['_  ', '_| ', '_| '],
    4: ['    ', '|_| ', '  | '],
    5: [' _  ', '|_  ', ' _| '],
    6: [' _  ', '|_  ', '|_| '],
    7: ['_  ', ' | ', ' | '],
    8: [' _  ', '|_| ', '|_| '],
    9: [' _  ', '|_| ', ' _| ']

}

function lcd(input, w, h) {
    var s = Array.from(input.toString()).map(Number)

    var rows = []

    function changeWidth(array) {
        array.forEach(function(item) {
            if (w > 1){
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
            }
        })
    }

    function changeHeight(array) {
        var indexShift = 0

        array.forEach(function(item) {

          var index = array.indexOf(item)

          if (item.includes('|')) {
            var duplicateRow = item.slice()

            for (var i = 0; i < duplicateRow.length; i++) {
              if (duplicateRow[i] !== '|') {
                  var length = item[i].length
                duplicateRow[i] = ' '.repeat(length)
              }
            }


            if (h > 1) {
                for (var i = 0; i < h-1; i++){
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
            for (var i = 0; i < 3 + h + (h-2); i++) {
                rows.push([''])
            }
        } else {
            for (var i = 0; i < 3; i++) {
                rows.push([''])
            }
        }
    }

    function generateResult(array) {
        for (var i = 0; i < rows.length; i++) {
            rows[i] += array[i].join('')
        }
    }

    generateNumberOfRows()

    for (var i = 0; i < s.length; i++) {

            var arrayOfNums = []
                
            convertNumsToArrays(digits[s[i]])

            changeWidth(arrayOfNums)

            var arrayOfNumsWithHeight = arrayOfNums.slice()

            changeHeight(arrayOfNums)

            generateResult(arrayOfNumsWithHeight)  
            
    }

    var result = ''

    for (var i = 0; i < rows.length; i++) {
        result += rows[i] + '\n'
    }

    return result

}

console.log(lcd(123456789, 1, 1))
console.log(lcd(123456789, 2, 2))
console.log(lcd(123456789, 2, 1))
console.log(lcd(123456789, 1, 2))
console.log(lcd(987654321, 1, 1))
console.log(lcd(987654321, 2, 2))
console.log(lcd(987654321, 2, 1))
console.log(lcd(987654321, 1, 2))
console.log(lcd(987654321, 1, 3))