const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)
let result = ''

for (i = 1; i <= count; i++) {
    result += '*'
    console.log(result)
}
