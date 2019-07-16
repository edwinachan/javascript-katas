function reversi(input) {

    var playerGoing = input[8][0]
    var opposingPlayer = ''

    if (playerGoing === 'B') {
        opposingPlayer = 'W'
    } else if (playerGoing === 'W') {
        opposingPlayer = 'B'
    }


    function canGoInDirection({x, y}) {

        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[rowOfPlayer].length; j++) {
                    if (input[rowOfPlayer][j] === playerGoing) {
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer + y; k >= 0 && k < 9; k += y) {
                            if (input[k][columnOfPlayer + x] === opposingPlayer) {
                                columnOfPlayer +=x
                                continue
                            } else if (input[k - y][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer + x] === '.') {
                                input[k][columnOfPlayer + x] = '0'
                                break
                            } else {
                                break
                            }
                        }
                    }
                }
            }
        }
    }


    canGoInDirection({x:0, y:1})
    canGoInDirection({x:0, y:-1})
    canGoInDirection({x:1, y:1})
    canGoInDirection({x:-1, y:1})
    canGoInDirection({x:1, y:-1})
    canGoInDirection({x:-1, y:-1})
    canGoInDirection({x:-1, y:0})
    canGoInDirection({x:1, y:0})


    return input

}


var testCase1 = [
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', 'B', 'W', '.', '.', '.', ],
    ['.', '.', '.', 'W', 'B', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['B']
]

var testCase2 = [
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', 'W', '.', 'W', '.', '.', '.', ],
    ['.', '.', 'B', 'B', 'B', '.', '.', '.', ],
    ['.', 'W', 'B', 'B', 'B', '.', 'W', '.', ],
    ['.', '.', 'B', 'W', 'B', 'B', 'B', '.', ],
    ['.', '.', '.', '.', 'W', 'W', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['B']
]

var testCase3 = [
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', 'B', 'B', 'B', '.', '.', ],
    ['.', '.', '.', 'B', 'W', 'W', '.', '.', ],
    ['.', '.', '.', 'B', 'W', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['B']
]


console.log(reversi(testCase3))