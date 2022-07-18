// 45656이란 수를 보자.
// 이 수는 인접한 모든 자리의 차이가 1이다. 이런 수를 계단 수라고 한다.
// N이 주어질 때, 길이가 N인 계단 수가 총 몇 개 있는지 구해보자. 0으로 시작하는 수는 계단수가 아니다.

// 0을 제외한 모든 숫자는 앞에 올 수 있다.
// 1~8은 뒤에 올 수 있는 숫자가 2종류 이다.

// d[자리 수][앞에 나오는 숫자] = 경우의 수
// N이 1자리 d[1] = {1,2,3,4,5,6,7,8,9}
// d[1][0] = 0
// d[1][1~9] = 1
// N이 2자리 d[2] = {10,12,21,23,32,34,43,45, .... 98}
// d[2][0] = 0
// d[2][1~8] = 2 --> d[2][1] = 2 (10,12), d[2][2] = 2 (21, 23)...
// d[2][9] = 1 (98)

// 점화식
// i : x( 0 <= x <= 9)
// f[N][x] = f[N-1][x-1] + f[N-1][x+1]  0 < L < 9
// f[N][x] = f[N-1][x+1] L = 0
// f[N][x] = f[N-1][x-1] L = 9

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()
//const input = fs.readFileSync('/dev/stdin').toString()
const N = Number(input)

let dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
for (let i = 1; i < N; i++) {
    dp.push([...Array(10)])
}

solution(N, dp)

function solution(n, dp) {
    for (let i = 1; i < N; i++) {
        for (let j = 0; j <= 9; j++) {
            dp[i][j] =
                ((dp[i - 1][j - 1] || 0) + (dp[i - 1][j + 1] || 0)) % 1000000000
        }
    }

    const result = dp[n - 1].reduce((acc, i) => {
        return (acc + i) % 1000000000
    }, 0)

    console.log(result)
}
