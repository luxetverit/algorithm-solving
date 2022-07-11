const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split('\n')

const count = Number(input[0])
let numbers = input[1].split(' ').map(x => Number(x))

numbers.sort(function compare(a, b) {
    return a - b
})

console.log(numbers[0] + ' ' + numbers[count - 1])
