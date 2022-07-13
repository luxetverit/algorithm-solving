//    *
//   * *
//  * * *
// * * * *

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

const num = parseInt(input)
let result = ''

for (i = 0; i < num; i++) {
    for (j = 0; j < num - i - 1; j++) {
        result += ' '
    }
    for (j = 0; j <= i * 2; j++) {
        if ((j + 1) % 2 !== 0) {
            result += '*'
        } else {
            result += ' '
        }
    }
    result += '\n'
}

console.log(result)
