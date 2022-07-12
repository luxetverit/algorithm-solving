//    *
//   **
//  ***
// ****
//  ***
//   **
//    *

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()

const num = parseInt(input)
let result = ''

if (num == 1) {
    result = '*'
} else {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num - i; j++) {
            result += ' '
        }
        for (j = 0; j < i + 1; j++) {
            result += '*'
        }
        result += '\n'
    }

    for (i = 0; i < num - 1; i++) {
        for (j = 0; j < i + 2; j++) {
            result += ' '
        }
        for (j = 0; j < num - i - 1; j++) {
            result += '*'
        }
    }
}

console.log(result)
