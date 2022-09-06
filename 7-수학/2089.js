const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

let num = Number(input)
let tmp = 0
let answer = []

while (num / -2 !== 0) {
    tmp = num % -2
    if (tmp == -1 || tmp == 1) {
        num = Math.floor(num / -2) + 1
        answer.push(1)
    } else if (tmp == 0) {
        num = Math.floor(num / -2)
        answer.push(0)
    }
}

console.log(answer.length == 0 ? 0 : answer.reverse().join(''))
