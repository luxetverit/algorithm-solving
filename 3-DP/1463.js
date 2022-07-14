// 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

// X가 3으로 나누어 떨어지면, 3으로 나눈다.
// X가 2로 나누어 떨어지면, 2로 나눈다.
// 1을 뺀다.
// 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다.
// 연산을 사용하는 횟수의 최솟값을 출력하시오.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()

const N = Number(input)
const DP = new Array(N + 1).fill(0)

// 숫자가 바뀌는 경우는 총 3가지
// 1을뺀다 [DP - 1]
// 2로 나눈다 DP[N/2]
// 3으로 나눈다 DP[N/3]

for (let i = 2; i <= N; i++) {
    DP[i] = DP[i - 1] + 1

    if (i % 2 == 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1)
    }
    if (i % 3 == 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1)
    }
}

console.log(DP[N])
