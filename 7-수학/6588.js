const fs = require('fs')
const input = fs
    .readFileSync('ex.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => Number(v))

const prime = { 1: true }
let answer = ''

for (let i = 0; i < input.length - 1; i++) {
    solution(input[i])
}

function solution(n) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (prime[i]) {
            continue
        }

        for (let j = i ** 2; j <= n; j += i) {
            prime[j] = true
        }
    }

    const result = []

    for (let i = 2; i <= n; i++) {
        if (!prime[i]) {
            result.push(i)
        }
    }

    for (let i = result.length - 1; i >= 0; i--) {
        if (result.indexOf(n - result[i]) != -1) {
            answer += 'n' + ' = ' + (n - result[i]) + ' + ' + result[i] + '\n'
            break
        }
    }
    console.log(result)
}
console.log(answer)
