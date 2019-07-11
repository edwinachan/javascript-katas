var input = 1
var input2 = 2
var input3 = 3
var input4 = 4
var input11 = 11
var input12 = 12
var input15 = 15
var input19 = 19
var input30 = 30
var input35 = 35

var numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    4000: 'MMMM',
    5000: 'MMMMM'
}

function roman(input) {
    var s = Array.from(input.toString()).map(Number)

    if (s.length === 1) {
        return numerals[s]
    }

    if (s.length === 2) {
        var tens = numerals[s[0]*10]
        
        if (s[1] !== 0) {
            var ones = numerals[s[1]]
            return tens.concat(ones)
        } else {
            return tens
        }
    }

    if (s.length === 3) {
        var hundreds = numerals[s[0]*100]
        var tens = numerals[s[1]*10]
        var ones = numerals[s[2]]

        if (s[1] !== 0) {
            if (s[2] !== 0) {
                return hundreds.concat(tens, ones)
            } else {
                return hundreds.concat(tens)
            }
        } else {
            return hundreds.concat(ones)
        }
    }

    if (s.length === 4) {
        var thousands = numerals[s[0]*1000]
        var hundreds = numerals[s[1]*100]
        var tens = numerals[s[2]*10]
        var ones = numerals[s[3]]

        if (s[1] !== 0) {
            if (s[2] !== 0) {
                if (s[3] !== 0) {
                    return thousands.concat(hundreds,tens,ones)
                } else {
                    return thousands.concat(hundreds,tens)
                }
            } else {
                if (s[3] !== 0) {
                    return thousands.concat(hundreds,ones)
                } else {
                    return thousands.concat(hundreds)
                }
            }
        } else {
            if (s[2] !== 0) {
                if (s[3] !== 0) {
                    return thousands.concat(tens,ones)
                } else {
                    return thousands.concat(tens)
                }
            } else {
                if (s[3] !== 0) {
                    return thousands.concat(ones)
                } else {
                    return thousands
                }
            }
        }
    }

}

console.log(roman(3176))