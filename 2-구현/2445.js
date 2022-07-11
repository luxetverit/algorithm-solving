// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)
let result = ''

for (let i = 0; i < count; i++) {
    for (let j = 0; j <= i; j++) {
        result += '*'
    }
    for (let j = 0; j < 2 * count - 2 * i - 2; j++) {
        result += ' '
    }
    for (let j = 0; j <= i; j++) {
        result += '*'
    }
    result += '\n'
}
for (let i = count - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        result += '*'
    }
    for (let j = 1; j <= 2 * count - 2 * i; j++) {
        result += ' '
    }
    for (let j = 1; j <= i; j++) {
        result += '*'
    }
    result += '\n'
}

console.log(result)
