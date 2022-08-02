const fs = require('fs')
const input = fs.readFileSync('ex.txt', 'utf-8').toString().trim().split('\n')
//const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().split('\n')

let [n, ...arr] = input
arr = arr.map(v => Number(v))

let result = arr.sort()
console.log(result.join('\n'))
