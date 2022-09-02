const fs = require('fs')
let [a, b] = fs.readFileSync('ex.txt').toString().trim().split(' ').map(Number)

let answer = ''

function solution(str) {
    if (str < 10) {
        return str
    }
    return String.fromCharCode(str + 55)
}

if (a == 0) {
    answer = 0
} else {
    while (a > 0) {
        let c = solution(a % b)
        answer = c + answer
        a = Math.floor(a / b)
    }
}

console.log(answer)
