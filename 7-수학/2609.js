// 문제
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

// 출력
// 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split(' ')

let num1 = Number(input[0])
let num2 = Number(input[1])

const GCD = (a, b) => (b > 0 ? GCD(b, a % b) : a)

const gcdVal = GCD(num1, num2)
const lcdVal = gcdVal * (num1 / gcdVal) * (num2 / gcdVal)

console.log(gcdVal)
console.log(lcdVal)
