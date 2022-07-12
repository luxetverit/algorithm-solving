// *****
//  ****
//   ***
//    **
//     *

const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)

let result = '*'.repeat(count).split('')
console.log(result.join(''))
for (let i = 0; i < count - 1; i++) {
    result[i] = ' '
    console.log(result.join(''))
}
