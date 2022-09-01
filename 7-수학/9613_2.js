const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

const n = input.shift()
const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b))
let answer = []

for (let i = 0; i < n; i++) {
    let arr = input[i].split(' ').map(v => Number(v))
    let m = arr.shift()
    arr.sort((a, b) => b - a)
    let result = 0
    for (let j = 0; j < m; j++) {
        for (let k = j + 1; k < m; k++) {
            let gcd = getGCD(arr[j], arr[k])
            result += gcd
        }
    }
    answer.push(result)
}
console.log(answer.join('\n'))
