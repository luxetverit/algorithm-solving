const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const n = parseInt(input)
let result = 0

for (i = 1; i <= n; i++) {
    result += i
}
console.log(result)
