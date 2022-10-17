// 문제
// N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N이 주어진다. (0 ≤ N ≤ 500)

// 출력
// 첫째 줄에 구한 0의 개수를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim()

let result = 0
let n = Number(input)

while (n >= 5) {
    result += parseInt(n / 5)
    n /= 5
}

console.log(result)
