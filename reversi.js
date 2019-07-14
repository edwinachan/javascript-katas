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

                for (var j = 0; j < input[i].length; j++) {
                    if (input[i][j] === playerGoing) {
                        var positionOfPlayer = j
                        
                        for (var k = rowOfPlayer - 1; k > -1; k--) {
                            if (input[k][positionOfPlayer] === opposingPlayer) {
                                continue
                            } else if (input[k+1][positionOfPlayer] === opposingPlayer && input[k][positionOfPlayer] === '.') {
                                input[k][positionOfPlayer] = '0'
                            } else {
                                continue
                            }
                        }

                    }
                }
            }

        }
    }

    function canGoDown() {
        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[i].length; j++ ) {
                    if (input[i][j] === playerGoing) {
                        var positionOfPlayer = j

                        for (var k = rowOfPlayer + 1; k < 9; k++ ) {
                            if (input[k][positionOfPlayer] === opposingPlayer) {
                                continue
                            } else if(input[k-1][positionOfPlayer] === opposingPlayer && input[k][positionOfPlayer] === '.') {
                                input[k][positionOfPlayer] = '0'
                            } else {
                                continue
                            }
                        }
                    }
                }
            }
        }
    }

    function canGoDiagonallyUpRight() {

        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[i].length; j++) {
                    if (input[i][j] === playerGoing) {
                        var positionOfPlayer = j

                        for (var k = rowOfPlayer-1; k > -1; k--) {
                            if (input[k][positionOfPlayer + 1] === opposingPlayer) {
                                positionOfPlayer ++
                                continue
                            } else if (input[k + 1][positionOfPlayer] === opposingPlayer && input[k][positionOfPlayer + 1] === '.') {
                                input[k][positionOfPlayer + 1] = '0'
                                break
                            } else {
                                continue
                            }
                        }
                    }
                }
            }
        }
    }

    canGoLeft()
    canGoRight()
    canGoUp()
    canGoDown()
    canGoDiagonallyUpRight()

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
    ['.', '.', '.', '.', 'W', '.', '.', '.', ],
    ['.', '.', 'B', 'B', 'B', '.', '.', '.', ],
    ['.', '.', 'B', 'B', 'B', '.', 'W', '.', ],
    ['.', '.', 'B', 'W', 'B', 'B', 'B', '.', ],
    ['.', '.', '.', '.', 'W', 'W', '.', '.', ],
    ['.', '.', '.', '.', '.', '.', '.', '.', ],
    ['B']
]


console.log(reversi(testCase2))