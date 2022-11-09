// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()
const [n, m] = input.split(' ').map((v) => Number(v))

const prime = { 1: true }

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
    if (prime[i]) {
        continue
    }

    for (let j = i ** 2; j <= m; j += i) {
        prime[j] = true
    }
}

const result = []

for (let i = n; i <= m; i++) {
    if (!prime[i]) {
        result.push(i)
    }
}

console.log(result.join('\n'))
