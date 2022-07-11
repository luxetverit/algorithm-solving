let fs = require('fs')
let input = fs.readFileSync('ex.txt')

let result = ''

for (i = 1; i <= input; i++) {
    result += i + '\n'
}
console.log(result)
