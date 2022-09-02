const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split(' ')

arr = input.map(v => Number(v))
let a = input[0]
let b = input[1]
let answer = []
while (a / b !== 0) {
    answer.push(a % b)
    a = Math.floor(a / b)
}
answer = answer.reverse()

for (let i = 0; i < answer.length; i++) {
    answer[i] >= 10 && answer[i] <= 35
        ? (answer[i] = String.fromCharCode(answer[i] + 55))
        : 0
}

console.log(answer.join(''))
