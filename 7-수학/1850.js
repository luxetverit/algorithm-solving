// 문제
// 모든 자리가 1로만 이루어져있는 두 자연수 A와 B가 주어진다.
// 이때, A와 B의 최대 공약수를 구하는 프로그램을 작성하시오.

// 예를 들어, A가 111이고, B가 1111인 경우에 A와 B의 최대공약수는 1이고,
// A가 111이고, B가 111111인 경우에는 최대공약수가 111이다.

// 입력
// 첫째 줄에 두 자연수 A와 B를 이루는 1의 개수가 주어진다. 입력되는 수는 263보다 작은 자연수이다.

// 출력
// 첫째 줄에 A와 B의 최대공약수를 출력한다. 정답은 천만 자리를 넘지 않는다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split(' ')

const a = BigInt(input[0])
const b = BigInt(input[1])

const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a)
let gcdVal = gcd(a, b)
console.log('1'.repeat(Number(gcdVal)))
