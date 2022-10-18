// 문제
// nCm 의 끝자리0의 개수를 출력하는 프로그램을 작성하시오

// 첫째줄에 정수 n,m이 주어진다

// nCm의 끝자리 0의 개수를 출력하시오

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split(' ').map(Number)
let [n, m] = input

// nCm = n! / (n-m)! / m!

function getPowerN(a, b) {
    // a! 에서 b의 개수를 찾는 함수
    let count = 0

    while (a >= b) {
        count += parseInt(a / b)
        a /= b
    }

    return count
}

const two = getPowerN(n, 2) - getPowerN(n - m, 2) - getPowerN(m, 2)
const five = getPowerN(n, 5) - getPowerN(n - m, 5) - getPowerN(m, 5)

console.log(Math.min(two, five))
