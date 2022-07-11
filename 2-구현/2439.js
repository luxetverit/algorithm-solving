const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)
let result = ''

for (i = 0; i < count; i++) {
    for (j = 0; j < count - i - 1; j++) {
        result += ' '
    }

    for (k = 0; k <= i; k++) {
        result += '*'
    }
    result += '\n'
}
console.log(result)
