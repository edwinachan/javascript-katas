function lcd(input) {
    var s = Array.from(input.toString()).map(Number)

    var row1 = ''
    var row2 = ''
    var row3 = ''

    for (i = 0; i < s.length; i++) {
        if (s[i] === 1) {
            row1 += '  '
            row2 += '| '
            row3 += '| '
        }
    
        if (s[i] === 2) {
            row1 += ' __  '
            row2 += ' __| '
            row3 += '|__  '
        }

        if (s[i] === 3) {
            row1 += '__  '
            row2 += '__| '
            row3 += '__| '
        }

        if ( s[i] === 4) {
            row1 += '     '
            row2 += '|__| '
            row3 += '   | '
        }

        if (s[i] === 5) {
            row1 += ' __  '
            row2 += '|__  '
            row3 += ' __| '
        }

        if (s[i] === 6) {
            row1 += ' __  '
            row2 += '|__  '
            row3 += '|__| '
        }

        if (s[i] === 7) {
            row1 += '__  '
            row2 += '  | '
            row3 += '  | '
        }

        if (s[i] === 8) {
            row1 += ' __  '
            row2 += '|__| '
            row3 += '|__| '
        }

        if (s[i] === 9) {
            row1 += ' __  '
            row2 += '|__| '
            row3 += ' __| '
        }


    }

    return row1 + '\n' + row2 + '\n' + row3
}

console.log(lcd(987654321))