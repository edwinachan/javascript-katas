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

    var firstNumeral = ''
    var remainderNumerals = ''
   
    function workOutFirstNumeral() {
        var power = s.length - 1
        firstNumeral = numerals[s[0] * Math.pow(10, power)]
    }


    function workOutRemainderNumerals() {
        
        for (i = 1; i < s.length; i++) {
            if (s[i] === 0) {
                continue
            } else {
                var numberOfZeros = s.length - 1 - i
                var multiple = Number('1' + '0'.repeat(numberOfZeros))

                remainderNumerals += numerals[s[i] * multiple]

            }
        }
    }

    workOutFirstNumeral()
    workOutRemainderNumerals()

    return firstNumeral.concat(remainderNumerals)

}

console.log(roman(3176))