//    *
//   * *
//  *   *
// *******

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

const num = parseInt(input)
let result = ''

for (i = 0; i < num; i++) {
    if (i == num - 1) {
        result += '*'.repeat(num * 2 - 1)
    } else {
        for (j = 0; j < num - i - 1; j++) {
            result += ' '
        }
        for (j = 0; j <= i * 2; j++) {
            if (j == 0 || j == i * 2) {
                result += '*'
            } else {
                result += ' '
            }
        }
        result += '\n'
    }
}

console.log(result)
