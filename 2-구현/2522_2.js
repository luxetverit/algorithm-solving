const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()

const num = parseInt(input)
let result = ''

for (i = 1; i < num + 1; i++) {
    console.log(' '.repeat(num - i) + '*'.repeat(i))
}
for (i = num - 1; i > 0; i--) {
    console.log(' '.repeat(num - i) + '*'.repeat(i))
}
