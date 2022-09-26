// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 값은 나오나 시간초과 (O(n^2))

const fs = require('fs')
const [a, b] = fs.readFileSync('ex.txt').toString().split(' ').map(Number)

let answer = []
function solution(v) {
    if (v < 2) {
        return
    }

    for (let i = 2; i < v; i++) {
        if (v % i === 0) {
            return
        }
    }
    answer.push(v)
}

for (let i = a; i <= b; i++) {
    solution(i)
}
console.log(answer.join('\n'))
