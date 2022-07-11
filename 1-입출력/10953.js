let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')

let count = input[0]
let num = []

for (let i = 1; i <= count; i++) {
    num = input[i].split(',')
    console.log(parseInt(num[0]) + parseInt(num[1]))
}
