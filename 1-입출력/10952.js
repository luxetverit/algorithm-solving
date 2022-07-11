let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')

let num = []

for (let i = 0; i < input.length; i++) {
    num = input[i].split(' ')
    numA = parseInt(num[0])
    numB = parseInt(num[1])
    if (numA !== 0 || numB !== 0) {
        console.log(numA + numB)
    } else {
        break
    }
}
