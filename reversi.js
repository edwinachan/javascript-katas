function reversi(input) {
    var playerGoing = input[8][0]
    var opposingPlayer = ''

    if (playerGoing === 'B') {
        opposingPlayer = 'W'
    } else if (playerGoing === 'W') {
        opposingPlayer = 'B'
    }

    function canGoLeft() {

        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var positionOfPlayer = input[i].indexOf(playerGoing)

                for  (var j = positionOfPlayer - 1; j > -1; j--) {
                    if (input[i][j] === opposingPlayer) {
                        continue
                    } else if (input[i][j+1] === opposingPlayer && input[i][j] === '.') {
                        input[i][j] = '0'
                        break
                    } else {
                        continue
                    }
                }
            }
        }
    }

    function canGoRight() {

        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var positionOfPlayer = input[i].indexOf(playerGoing)

                for (var j = positionOfPlayer + 1; j < 9; j++) {
                    if (input[i][j] === opposingPlayer) {
                        continue
                    } else if (input[i][j-1] === opposingPlayer && input[i][j] === '.') {
                        input[i][j] = '0'
                        break
                    } else {
                        continue
                    }
                }
            }
        }
    }

    function canGoUp() {
        for (var i = 0; i < input.length-1; i++) {

            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i
                var positionOfPlayer = input[i].indexOf(playerGoing)

                for (var j = rowOfPlayer - 1; j > -1; j--) {
                    if (input[j][positionOfPlayer] === opposingPlayer) {
                        continue
                    } else if (input[j+1][positionOfPlayer] === opposingPlayer && input[j][positionOfPlayer] === '.') {
                        input[j][positionOfPlayer] = '0'
                    } else {
                        continue
                    }
                }
            }

        }
    }

    function canGoDown() {
        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i
                var positionOfPlayer = input[i].indexOf(playerGoing)
            }

            for (var j = rowOfPlayer + 1; j < 9; j++){
                if (input[j][positionOfPlayer] === opposingPlayer) {
                    continue
                } else if (input[j-1][positionOfPlayer] === opposingPlayer && input[j][positionOfPlayer] === '.') {
                    input[j][positionOfPlayer] = '0'
                } else {
                    continue
                }
            }
        }
    }

    canGoLeft()
    canGoRight()
    canGoUp()
    canGoDown()

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
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['.', '.', 'B', 'B', 'B', '.', '.', '.', ],
    ['.', '.', 'B', 'B', 'B', '.', '.', '.', ],
    ['.', '.', 'B', 'W', 'B', 'B', '.', '.', ],
    ['.', '.', '.', '.', 'W', 'W', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['B']
]


console.log(reversi(testCase1))