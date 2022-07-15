// 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2
// 1+3
// 3+1
// 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

// n이 4일때 3+1, 2+2, 1+3
// n이 5일때 4+1, 3+2, 2+3
// n이 6일때 5+1, 4+2, 3+3 .....
// 이전의 만들어진 숫자의 개수에 +1 or +2 or +3

// 점화식 f(x) = f(x-1) + f(x-2) + f(x-3)

const fs = require('fs')
const input = fs
    .readFileSync('ex.txt')
    .toString()
    .split('\n')
    .map(v => Number(v))
const cases = input[0]
let arrResult = [0, 1, 2, 4]

for (let i = 1; i <= cases; i++) {
    let num = input[i]
    for (let j = 4; j <= num; j++) {
        arrResult[j] = arrResult[j - 1] + arrResult[j - 2] + arrResult[j - 3]
    }
    console.log(arrResult[num])
}
