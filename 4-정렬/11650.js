// 문제
// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다.
// (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

// 출력
// 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')
//const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n')

let [n, ...arr] = input
let result = ''
arr = arr.map(arr => arr.split(' ').map(v => Number(v)))
arr.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0]
    }
    return a[1] - b[1]
}).forEach(arr => {
    result += `${arr[0]} ${arr[1]}\n`
})

console.log(result)
