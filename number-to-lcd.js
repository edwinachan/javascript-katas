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

    var row1 = ''
    var row2 = ''
    var row3 = ''

    for (i = 0; i < s.length; i++) {
        if (s[i] === 1) {
            oneRow1 = '  '
            oneRow2 = '| '
            oneRow3 = '| '
            var row1Array = Array.from(oneRow1)
            var row2Array = Array.from(oneRow2)
            var row3Array = Array.from(oneRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')

        }


        if (s[i] === 2) {

            var twoRow1 = ' _  '
            var twoRow2 = ' _| '
            var twoRow3 = '|_  '
            var row1Array = Array.from(twoRow1)
            var row2Array = Array.from(twoRow2)
            var row3Array = Array.from(twoRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')

        }

        if (s[i] === 3) {
            var threeRow1 = '_  '
            var threeRow2 = '_| '
            var threeRow3 = '_| '
            var row1Array = Array.from(threeRow1)
            var row2Array = Array.from(threeRow2)
            var row3Array = Array.from(threeRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')

        }

        if ( s[i] === 4) {

            var fourRow1 = '    '
            var fourRow2 = '|_| '
            var fourRow3 = '  | '
            var row1Array = Array.from(fourRow1)
            var row2Array = Array.from(fourRow2)
            var row3Array = Array.from(fourRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }

        if (s[i] === 5) {
            fiveRow1 = ' _  '
            fiveRow2 = '|_  '
            fiveRow3 = ' _| '
            var row1Array = Array.from(fiveRow1)
            var row2Array = Array.from(fiveRow2)
            var row3Array = Array.from(fiveRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }

        if (s[i] === 6) {
            sixRow1 = ' _  '
            sixRow2 = '|_  '
            sixRow3 = '|_| '

            var row1Array = Array.from(sixRow1)
            var row2Array = Array.from(sixRow2)
            var row3Array = Array.from(sixRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }

        if (s[i] === 7) {
            sevenRow1 = '_  '
            sevenRow2 = ' | '
            sevenRow3 = ' | '

            var row1Array = Array.from(sevenRow1)
            var row2Array = Array.from(sevenRow2)
            var row3Array = Array.from(sevenRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }

        if (s[i] === 8) {
            eightRow1 = ' _  '
            eightRow2 = '|_| '
            eightRow3 = '|_| '

            var row1Array = Array.from(eightRow1)
            var row2Array = Array.from(eightRow2)
            var row3Array = Array.from(eightRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }

        if (s[i] === 9) {
            nineRow1 = ' _  '
            nineRow2 = '|_| '
            nineRow3 = ' _| '

            var row1Array = Array.from(nineRow1)
            var row2Array = Array.from(nineRow2)
            var row3Array = Array.from(nineRow3)

            var array = [row1Array, row2Array, row3Array]

            changeWidth(array)

            row1 += row1Array.join('')
            row2 += row2Array.join('')
            row3 += row3Array.join('')
        }


    }

    return row1 + '\n' + row2 + '\n' + row3
}

console.log(lcd(345, 2))


