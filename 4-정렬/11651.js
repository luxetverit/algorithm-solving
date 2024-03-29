const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

let [n, ...arr] = input
let result = ''
arr = arr.map(arr => arr.split(' ').map(v => Number(v)))
arr.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
}).forEach(arr => {
    result += `${arr[0]} ${arr[1]}\n`
})

console.log(result)
