const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)
let result = ''

for (let i = 0; i < count; i++) {
    for (let j = count - 1; j > i; j--) {
        result += ' '
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += '*'
    }
    result += '\n'
}

for (let i = 0; i < count; i++) {
    for (let k = 0; k < i + 1; k++) {
        result += ' '
    }
    for (let j = count * 2 - 3; j > i * 2; j--) {
        result += '*'
    }
    result += '\n'
}
console.log(result)
