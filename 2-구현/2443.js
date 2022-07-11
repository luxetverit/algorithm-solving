const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)
let result = ''

for (let i = 0; i < count; i++) {
    for (let j = count * 2 - 1; j > i * 2; j--) {
        result += '*'
    }
    result += '\n'
    for (let k = 0; k < i + 1; k++) {
        result += ' '
    }
}
console.log(result)
