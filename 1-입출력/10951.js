let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')
console.log(input.length)
console.log(input[0])
let num = []

for (let i = 0; i < input.length; i++) {
    num = input[i].split(' ')
    console.log(parseInt(num[0]) + parseInt(num[1]))
}
