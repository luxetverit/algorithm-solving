let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString().split('\n')

for (let i = 0; i < input.length; i++) {
    let str = input[i]
    console.log(str)
}
