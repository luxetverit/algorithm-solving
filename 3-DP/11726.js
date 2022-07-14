const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()
const N = Number(input)

let arrResult = [0, 1, 2]
for (let i = 3; i <= N; i++) {
    arrResult[i] = (arrResult[i - 1] + arrResult[i - 2]) % 10007
}

console.log(arrResult[N])
