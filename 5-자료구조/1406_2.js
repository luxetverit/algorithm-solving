const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')
let [str, n, ...arr] = input
arr = arr.map(v => v.replace('\r', ''))
let lStack = str.trim().split('')
let rStack = []

for (let i = 0; i < n; i++) {
    let [cmd, val] = arr[i].split(' ')
    cmd === 'L' && lStack.length
        ? rStack.push(lStack.pop())
        : cmd === 'D' && rStack.length
        ? lStack.push(rStack.pop())
        : cmd === 'B'
        ? lStack.pop()
        : cmd === 'P'
        ? lStack.push(val)
        : 0
}

let answer = lStack.join('')
answer += rStack.reverse().join('')
console.log(answer)
