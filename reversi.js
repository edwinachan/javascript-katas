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
                var columnOfPlayer = input[i].indexOf(playerGoing)

                for  (var j = columnOfPlayer - 1; j > -1; j--) {
                    if (input[i][j] === opposingPlayer) {
                        continue
                    } else if (input[i][j+1] === opposingPlayer && input[i][j] === '.') {
                        input[i][j] = '0'
                        break
                    } else {
                        break
                    }
                }
            }
        }
    }

    function canGoRight() {

        for (var i = 0; i < input.length-1; i++) {
            if (input[i].includes(playerGoing)) {
                var columnOfPlayer = input[i].indexOf(playerGoing)

                for (var j = columnOfPlayer + 1; j < 9; j++) {
                    if (input[i][j] === opposingPlayer) {
                        continue
                    } else if (input[i][j-1] === opposingPlayer && input[i][j] === '.') {
                        input[i][j] = '0'
                        break
                    } else {
                        break
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
                        var columnOfPlayer = j
                        
                        for (var k = rowOfPlayer - 1; k > -1; k--) {
                            if (input[k][columnOfPlayer] === opposingPlayer) {
                                continue
                            } else if (input[k+1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer] === '.') {
                                input[k][columnOfPlayer] = '0'
                            } else {
                                break
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
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer + 1; k < 9; k++ ) {
                            if (input[k][columnOfPlayer] === opposingPlayer) {
                                continue
                            } else if(input[k-1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer] === '.') {
                                input[k][columnOfPlayer] = '0'
                            } else {
                                break
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
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer-1; k > -1; k--) {
                            if (input[k][columnOfPlayer + 1] === opposingPlayer) {
                                columnOfPlayer ++
                                continue
                            } else if (input[k + 1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer + 1] === '.') {
                                input[k][columnOfPlayer + 1] = '0'
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

    function canGoDiagonallyUpLeft() {
        for (var i = 0; i < input.length - 1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[i].length; j++) {
                    if (input[rowOfPlayer][j] === playerGoing) {
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer-1; k > -1; k--) {
                            if (input[k][columnOfPlayer-1] === opposingPlayer) {
                                columnOfPlayer --
                                continue
                            } else if (input[k+1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer - 1] === '.') {
                                input[k][columnOfPlayer - 1] = '0'
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

    function canGoDiagonallyDownRight() {
        for (var i = 0; i < input.length - 1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[i].length; j++) {
                    if (input[rowOfPlayer][j] === playerGoing) {
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer + 1; k < 9; k++) {
                            if (input[k][columnOfPlayer + 1] === opposingPlayer) {
                                columnOfPlayer++
                                continue
                            } else if (input[k-1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer + 1] === '.') {
                                input[k][columnOfPlayer + 1] = '0'
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

    function canGoDiagonallyDownLeft () {
        for (var i = 0; i < input.length - 1; i++) {
            if (input[i].includes(playerGoing)) {
                var rowOfPlayer = i

                for (var j = 0; j < input[i].length; j++) {
                    if (input[rowOfPlayer][j] === playerGoing) {
                        var columnOfPlayer = j

                        for (var k = rowOfPlayer + 1; k < 9; k++) {
                            if (input[k][columnOfPlayer - 1] === opposingPlayer) {
                                columnOfPlayer--
                                continue
                            } else if (input[k-1][columnOfPlayer] === opposingPlayer && input[k][columnOfPlayer - 1] === '.') {
                                input[k][columnOfPlayer - 1] = '0'
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

    canGoLeft()
    canGoRight()
    canGoUp()
    canGoDown()
    canGoDiagonallyUpRight()
    canGoDiagonallyUpLeft()
    canGoDiagonallyDownRight()
    canGoDiagonallyDownLeft()

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


console.log(reversi(testCase2))