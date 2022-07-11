let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')

let count = input[0]

for (let i = 1; i <= count; i++) {
    let num = input[i].split(' ')
    sum = parseInt(num[0]) + parseInt(num[1])
    console.log('Case #' + i + ': ' + sum)
}
