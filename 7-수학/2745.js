const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split(' ')

let char = input[0].split('').reverse()
const num = Number(input[1])

let result = 0

for (let i = 0; i < char.length; i++) {
    if (char[i] >= 'A' && char[i] <= 'Z') {
        char[i] = char[i].charCodeAt() - 55
        result += char[i] * Math.pow(num, i)
    } else {
        char[i] = Number(char[i])
        result += char[i] * Math.pow(num, i)
    }
}
console.log(result)
