const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

let [n, ...arr] = input
arr = arr.map(v => v.replace('\r', ''))

let queue = []
let result = []

for (let i = 0; i < n; i++) {
    console.log(arr[i])
    switch (arr[i]) {
        case 'pop':
            result.push(queue.shift() || -1)
            break
        case 'size':
            result.push(queue.length)
            break
        case 'empty':
            result.push(queue[0] ? 0 : 1)
            break
        case 'front':
            result.push(queue[0] ? queue[0] : -1)
            break
        case 'back':
            result.push(queue[queue.length - 1] || -1)
            break
        default:
            queue.push(arr[i].split(' ')[1])
            break
    }
}
console.log(result.join('\n'))
