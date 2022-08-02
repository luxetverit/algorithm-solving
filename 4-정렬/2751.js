//퀵정렬(stable)
const fs = require('fs')
const input = fs.readFileSync('ex.txt', 'utf-8').toString().trim().split('\n')
//const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().split('\n')

let [n, ...arr] = input
arr = arr.map(v => Number(v))
const result = arr.sort((a, b) => a - b)
console.log(result.join('\n'))
