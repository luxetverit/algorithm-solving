// 문제
// 준규는 숫자 카드 N장을 가지고 있다. 숫자 카드에는 정수가 하나 적혀있는데,
// 적혀있는 수는 -2의 62제곱보다 크거나 같고, 2의 62제곱보다 작거나 같다.

// 준규가 가지고 있는 카드가 주어졌을 때, 가장 많이 가지고 있는 정수를 구하는 프로그램을 작성하시오.
// 만약, 가장 많이 가지고 있는 정수가 여러 가지라면, 작은 것을 출력한다.

// 입력
// 첫째 줄에 준규가 가지고 있는 숫자 카드의 개수 N (1 ≤ N ≤ 100,000)이 주어진다.
// 둘째 줄부터 N개 줄에는 숫자 카드에 적혀있는 정수가 주어진다.

// 출력
// 첫째 줄에 준규가 가장 많이 가지고 있는 정수를 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().trim().split('\n')

const n = input.shift()
arr = input.map(v => BigInt(v))
// Bigint는 단순히 sort a-b로 정렬 불가
// 따라서 조건식을 추가해서 정렬
// a < b 면 -1, a > b면 1, else 0
arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

// forEach 문으로 각 배열의 요소를 돌며 count
let count = 1
let maxValue = arr[0]
let maxCount = 0

arr.forEach(function (ele, index) {
    //console.log(`${arr[index]} ${ele} ${index}`)
    next = arr[index + 1]
    if (ele === next) {
        count++
    } else {
        count = 1
    }
    //console.log(count)
    if (count > maxCount) {
        maxCount = count
        maxValue = ele
    }
})

console.log(String(maxValue))
