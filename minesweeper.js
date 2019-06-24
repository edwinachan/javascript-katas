/*
http://codingdojo.org/kata/Minesweeper/

*/

function minesweeper(m, n, input){
    var finalArray = input.split('')
    var corners = [0, (n*n) - 1, n - 1, (m*n) - n]
    var topRow = [0, n-1]
    var bottomRow = [(m*n) - n, (n*n) - 1]

    function topLeftCornerUpdate() {
        var count = 0

        var topLeftCornerIndex = 0

        var topLeftCornerChecks = [finalArray[topLeftCornerIndex + 1], finalArray[topLeftCornerIndex + n], finalArray[topLeftCornerIndex + (n+1)]]

        if (finalArray[topLeftCornerIndex] !== '*'){
            topLeftCornerChecks.forEach(function(item) {
                if(item === '*'){
                    count ++
                }
            })
        finalArray[topLeftCornerIndex] = count
        }
    }

    function bottomRightCornerUpdate() {
        var count = 0

        var bottomRightCornerIndex = (m*n) -1

        var bottomRightCornerChecks = [finalArray[bottomRightCornerIndex - 1], finalArray[bottomRightCornerIndex - n], finalArray[bottomRightCornerIndex - (n+1)]]

        if(finalArray[bottomRightCornerIndex] !== '*') {
            bottomRightCornerChecks.forEach(function(item) {
                if (item === '*') {
                    count ++
                }
            })
        finalArray[bottomRightCornerIndex] = count
        }
    }

    function topRightCornerUpdate() {
        var count = 0

        var topRightCornerIndex = n-1

        var topRightCornerChecks = [finalArray[topRightCornerIndex - 1], finalArray[topRightCornerIndex + n], finalArray[topRightCornerIndex + (n-1)]]

        if(finalArray[topRightCornerIndex] !== '*') {
            topRightCornerChecks.forEach(function(item) {
                if (item === '*') {
                    count ++
                }
            })
        finalArray[topRightCornerIndex] = count
        }
    }

    function bottomLeftCornerUpdate() {
        var count = 0

        var bottomLeftCornerIndex = (m*n)-n

        var bottomLeftCornerChecks = [finalArray[bottomLeftCornerIndex + 1], finalArray[bottomLeftCornerIndex - n], finalArray[bottomLeftCornerIndex - (n-1)]]

        if(finalArray[bottomLeftCornerIndex] !== '*') {
            bottomLeftCornerChecks.forEach(function(item) {
                if (item === '*') {
                    count ++
                }
            })
        finalArray[bottomLeftCornerIndex] = count
        }
    }

    function checkLHS() {
        for (i = 0; i < finalArray.length; i++) {
            if ((finalArray[i] !== '*') && (i % n === 0) && !corners.includes(i)) {

                var count = 0

                var checks = [finalArray[i - n], finalArray[i - (n-1)], finalArray[i + 1], finalArray[i + n], finalArray[i + (n+1)]]

                checks.forEach(function(item) {
                    if (item === '*') {
                        count++
                    }
                })
                finalArray[i] = count
            }
        }
    }

    function checkRHS() {
        for (i = 0; i < finalArray.length; i++) {
            if ((finalArray[i] !== '*') && (i % n === (n-1)) && !corners.includes(i)) {

                var count = 0

                var checks = [finalArray[i - (n+1)], finalArray[i - n], finalArray[i - 1], finalArray[i + (n-1)], finalArray[i + n]]

                checks.forEach(function(item) {
                    if (item === '*') {
                        count++
                    }
                })
                finalArray[i] = count
            }
        }  
    }


    function checkTop() {
        for (i = 0; i < finalArray.length; i++) {
            if ((finalArray[i] !== '*') && topRow[0] < i && i < topRow[1]) {

                var count = 0

                var checks = [finalArray[i - 1], finalArray[i + 1], finalArray[i + (n-1)], finalArray[i + n], finalArray[i + (n+1)]]

                checks.forEach(function(item) {
                    if (item === '*') {
                        count++
                    }
                })
                finalArray[i] = count
            }
        }
    }

    function checkBottom() {
        for (i = 0; i < finalArray.length; i++) {
            if ((finalArray[i] !== '*') && bottomRow[0] < i && i < bottomRow[1]) {

                var count = 0

                var checks = [finalArray[i - 1], finalArray[i + 1], finalArray[i - (n-1)], finalArray[i - n], finalArray[i - (n+1)]]

                checks.forEach(function(item) {
                    if (item === '*') {
                        count++
                    }
                })
                finalArray[i] = count
            }
        }
    }

    function checkEverythingElse () {
        for (i = 0; i < finalArray.length; i++){
            if (finalArray[i] == '.') {

            var count = 0

            var checks = [finalArray[i - (n+1)], finalArray[i -n], finalArray[i - (n-1)], finalArray[i - 1], finalArray[i + 1], finalArray[i + (n-1)], finalArray[i + n], finalArray[i + (n+1)]]

            checks.forEach(function(item) {
                if (item === '*') {
                    count++
                }
            })
            finalArray[i] = count
        }
    }
}

topLeftCornerUpdate()
bottomRightCornerUpdate()
topRightCornerUpdate()
bottomLeftCornerUpdate()
checkLHS()
checkRHS()
checkTop()
checkBottom()
checkEverythingElse()

return finalArray

}

console.log(minesweeper(3, 5, '**.........*...'))
console.log(minesweeper(4, 4, '*........*......'))
