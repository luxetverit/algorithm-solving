const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

let arr = input.split('').map(Number)
arr.sort((a, b) => b - a)

console.log(arr.join(''))
