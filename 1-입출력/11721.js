let fs = require('fs')
let input = fs.readFileSync('ex.txt').toString()

if (input.lenth < 10) {
    console.log(input)
} else {
    for (i = 0; i < input.length; i += 10) {
        console.log(input.slice(i, i + 10))
    }
}
