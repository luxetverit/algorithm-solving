let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')

let strnum = input[1]
let arr = strnum.split('').map(Number)

const result = arr.reduce(function add(sum, currValue) {
    return sum + currValue
})
console.log(result)
