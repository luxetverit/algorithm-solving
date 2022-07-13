// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

const num = parseInt(input)
let result = ''

for (i = 0; i < num; i++) {
    result += ' '.repeat(i) + '*'.repeat(num * 2 - (i * 2 + 1))
    result += '\n'
}

for (i = num; i > 1; i--) {
    result += ' '.repeat(i - 2) + '*'.repeat(num * 2 - (i * 2 - 3))
    result += '\n'
}
console.log(result)
