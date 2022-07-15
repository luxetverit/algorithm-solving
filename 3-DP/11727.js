//2×n 직사각형을 1×2, 2×1, 2x2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
//타일을 채우는 방법
// 1. 2x(n-1) 만큼 타일을 채우고 2x1 타일을 1개 붙힌다
// 2. 2x(n-2) 만큼 타일을 채우고 1x2 타일을 2개 붙힌다.
// 3. 2x(n-2) 만큼 타일을 채우고 2x2 타일을 1개 붙힌다.

// 점화식 f(x) = f(x-1) + 2*f(x-2) / (n >= 3), f(1) = 1, f(2) = 3

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString()
const N = Number(input)

let arrResult = [0, 1, 3]
for (let i = 3; i < N + 2; i++) {
    arrResult[i] = (arrResult[i - 1] + 2 * arrResult[i - 2]) % 10007
}

console.log(arrResult[N])
