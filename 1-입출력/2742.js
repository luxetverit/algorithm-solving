const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

const n = input
let answer = ''

for (i = n; i > 0; i--) {
    answer += `${i}
`
}
console.log(answer)
