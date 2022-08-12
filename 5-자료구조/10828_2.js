const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

let [n, ...arr] = input
arr = arr.map(v => v.replace('\r', ''))
solution(arr)

function solution(arr) {
    const stack = []
    let top = 0
    let answer = '0'
    const cmdObj = {
        push: x => (stack[top++] = x),
        pop: () => {
            if (top) {
                top--
                return stack.splice(-1)
            }
            return -1
        },
        size: () => top,
        empty: () => (!top ? 1 : 0),
        top: () => (top ? stack[top - 1] : -1),
    }
    arr.map(str => {
        const [cmd, num] = str.split(' ')
        if (cmd == 'push') cmdObj[cmd](+num)
        else answer += `${cmdObj[cmd]()}\n`
    })
    return answer
}
