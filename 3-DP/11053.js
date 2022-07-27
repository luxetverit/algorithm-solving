//수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

//예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split('\n')
//const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let [n, ...arr] = input
arr = arr.map(v => Number(v))
let dp = new Array(Number(n)).fill(1)

solution(n, arr)

function solution(n, arr) {
    if (n === 0) console.log(0)
    else if (n === 1) console.log(1)
    else {
        for (let i = 1; i < n; i++) {
            const values = [1]
            for (let j = 0; j < i; j++) {
                if (arr[i] > arr[j]) {
                    values.push(dp[j] + 1)
                }
            }
            dp[i] = Math.max(...values)
        }
        console.log(Math.max(...dp))
    }
}
