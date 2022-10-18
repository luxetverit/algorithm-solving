const fs = require('fs')
let num = fs.readFileSync('ex.txt').toString().trim()

let result = []
let i = 2

while (true) {
    if (num % i === 0) {
        num = num / i
        result.push(i)
        i = 1
    }
    i++
    if (i > num) {
        break
    }
}

console.log(result.join('\n'))
