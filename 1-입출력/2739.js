const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()

let num = parseInt(input[0])

for (i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}
