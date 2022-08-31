const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

const n = input.shift()

const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b))

const getSum = (n, ...arr) => {
    let sum = 0
    arr.sort((a, b) => b - a)
    arr.forEach((v, i) => {
        while (i < n - 1) {
            sum += getGCD(v, arr[++i])
        }
    })
    return sum
}

const output = []
input.forEach(v => {
    output.push(getSum(...v.split(' ').map(v => +v)))
})
console.log(output.join('\n'))
