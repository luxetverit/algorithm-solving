// 문제
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.

// 출력
// 첫째 줄에 N!을 출력한다.

const fs = require('fs')
let num = fs.readFileSync('ex.txt').toString().trim()

let result = 1
if (num === 0) {
    console.log(1)
} else {
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
}

console.log(result)
