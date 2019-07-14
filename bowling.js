function bowling(input) {

    var frames = input.split(' ')

    var framesSplit = []

    for (i = 0; i < frames.length; i++) {
        if (frames[i] === 'X') {
            frames[i] = 10
            framesSplit[i] = frames[i]
        } else {
            framesSplit.push(Array.from(frames[i]))
        }

        for (j = 0; j < framesSplit[i].length; j++) {
            if ('0123456789'.includes(framesSplit[i][j])) {
                framesSplit[i][j] = Number(framesSplit[i][j])
            } else if ('-'.includes(framesSplit[i][j])) {
                framesSplit[i][j] = 0
            }
        }
    }
    

    var scores = framesSplit.slice()

    function includesSpare() {

            if (framesSplit[i+1] === 10) {
                scores[i] = 20
            } else {
                scores[i] = 10 + Number(framesSplit[i+1][0])
            }

    }

    function includesMiss() {
        for (var j = 0; j < scores[i].length; j++) {
            if ('0123456789'.includes(scores[i][j])) {
                scores[i] = scores[i][j]
            } else {
                scores[i] = 0
            }
        }
    }

    function onlyNumbers() {
        var count = 0
        for (var j = 0; j < framesSplit[i].length; j++) {
                count += Number(framesSplit[i][j])
        }
        scores[i] = count
    }

    function ifStrike() {
        if (framesSplit[i+1].length === 2 && !(framesSplit[i+1].includes('/'))) {
            scores[i] = 10 + Number(framesSplit[i+1][0]) + Number(framesSplit[i+1][1])
        } else if (typeof(framesSplit[i+1]) === 'object' && framesSplit[i+1].includes('/')) {
            scores[i] = 20
        } else if (framesSplit[i+1] === 10 && framesSplit[i+2] !== 10) {
            scores[i] = 10 + 10 + Number(framesSplit[i+2][0])
        } else if (framesSplit[i+1] === 10 && framesSplit[i+2] === 10) {
            scores[i] = 30
        }
    }

    function calculateScores() {
        if (framesSplit[i] === 10) {
            ifStrike()
        } else  if (framesSplit[i].includes('/')) {
            includesSpare()
        } else if (framesSplit[i].includes('-')) {
            includesMiss()
        } else {
            onlyNumbers()
        }
    }


    for (var i = framesSplit.length -3; i >= 0 ; i--) {
        calculateScores()
    }

    if (frames.length === 12) {
        scores.pop()
        scores.pop()
        console.log(scores.reduce((a,b) => Number(a)+Number(b), 0))
    } else if (frames.length === 11) {
        if (typeof(framesSplit[10]) === 'object' && framesSplit[10].includes('/')) {
            scores[9] = 20
        } else {
            scores[9] = 10 + Number(framesSplit[10][0]) + Number(framesSplit[10][1])
        }
        scores.pop()
        console.log(scores.reduce((a,b) => Number(a)+Number(b), 0))
    } else if (frames.length === 10) {
        for (var i = 8; i < framesSplit.length-1; i++) {
            calculateScores()
        }
        if (!(framesSplit[9].includes('/'))) {
            scores[9] = Number(scores[9][0]) + Number(scores[9][1])
            console.log(scores.reduce((a,b) => Number(a)+Number(b), 0))
        } else {
            scores[9] = 10 + Number(scores[9][2])
            console.log(scores.reduce((a,b) => Number(a)+Number(b), 0))
        }
    }

}


var input = 'X X X X X X X X X X X X' //300

var input2 = '9- 9- 9- 9- 9- 9- 9- 9- 9- 9-' //90

var input3 = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5' //150

var input4 = '22 22 22 22 22 22 22 22 22 22' //40

var input5 = '3/ 52 1- X 34 4/ 7- 4/ 6- 42' //99

var input6 = '9/ 24 X 9/ 42 7/ X 2- 4/ X 35' //130

var input7 = '45 3/ X X 7/ -7 8/ 3/ X 4/3' //159

var input8 = '7/ X -6 5/ X X -1 3/ -2 X 4/' //126

var input9 = '7/ -9 6- X 9/ X -1 X 9/ 8/5' //130

var input10 = '24 X 9/ -- 8- 6/ 6/ 34 7/ -7' //97

var input11 = 'X X X X X X X X X X 9/' //289

console.log(bowling(input3))