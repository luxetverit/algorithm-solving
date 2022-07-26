// 오르막 수는 수의 자리가 오름차순을 이루는 수를 말한다. 이때, 인접한 수가 같아도 오름차순으로 친다.
// 예를 들어, 2234와 3678, 11119는 오르막 수이지만, 2232, 3676, 91111은 오르막 수가 아니다.
// 수의 길이 N이 주어졌을 때, 오르막 수의 개수를 구하는 프로그램을 작성하시오. 수는 0으로 시작할 수 있다.

// 입력
// 첫째 줄에 N (1 ≤ N ≤ 1,000)이 주어진다.

// 출력
// 첫째 줄에 길이가 N인 오르막 수의 개수를 10,007로 나눈 나머지를 출력한다.

// N=1자리수 일때
// 각 숫자는 그 자체로 오르막수가 되므로 10개

// N=2 자리수 일때
// 1. 숫자가 0으로 끝나는 경우
// 00 1개
// 2. 숫자가 1으로 끝나는 경우
// 01 11 2개
// 3. 숫자가 K로 끝나는 경우
// F[2][K] = F[1][0]...F[1][K]

// 길이가 N일때
// f[N][K] = f[N-1][0]+.....f[N-1][K]

// f[N][K] = f[N-1][K] + f[N][K-1]

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()
//const input = fs.readFileSync('/dev/stdin').toString()
const N = Number(input)
const mod = 10007

let dp = Array.from(Array(N + 1), () => new Array())
//dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

solution(N, dp)

function solution(n, dp) {
    for (i = 0; i <= 9; i++) {
        dp[1][i] = 1
    }
    for (let i = 2; i <= n; i++) {
        dp[i][0] = 1

        for (let j = 1; j <= 9; j++) {
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % mod
        }
    }

    const result = dp[n].reduce((acc, i) => {
        return (acc + i) % mod
    }, 0)

    console.log(result)
}
