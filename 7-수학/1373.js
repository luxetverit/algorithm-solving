const fs = require('fs')
let n = fs.readFileSync('ex.txt').toString().trim()

//진법변환
// 110011100 (2진수) 을 8진수로 변환하여 출력하라

let result = ''
while (n.length > 3) {
    let num = n.slice(n.length - 3, n.length)
    result = parseInt(num, 2).toString(8) + result
    n = n.slice(0, n.length - 3)
}
console.log(parseInt(n, 2).toString(8) + result)

//////////////////////////////////////////////////////////////////////////
const a = 11001100

/* N진수로 변환하기 */
const nNum = a.toString(2) // toString에 인자로 N진수의 N을 주면 변환가능했다. 2의 경우 2진수로 변환
console.log(nNum) // "101" 5는 2진수로는 101로 표현한다. 다른 N진수로 변환하는 것도 동일하다.

/* N진수를 10진수로 변환하기 */
const b = parseInt(a, 2) // 2번째 인자로 해당 수가 몇 진법을 사용하는지 알려준다.
console.log(b)
