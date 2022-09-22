// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split('\n')

const n = Number(input[0])
const num = input[1].split(' ').map(v => Number(v))
let count = 0

function solution(v) {
    if (v < 2) {
        return
    }

    for (let i = 2; i < v; i++) {
        if (v % i === 0) {
            return
        }
    }
    count++
}

for (let i = 0; i < n; i++) {
    solution(num[i])
}

console.log(count)
