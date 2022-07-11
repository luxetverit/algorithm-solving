const fs = require('fs')
const input = fs.readFileSync('ex.txt')

const count = Number(input)

for (i = count; i >= 1; i--) {
    console.log('*'.repeat(i))
}
