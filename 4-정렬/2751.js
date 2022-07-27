//퀵정렬(stable)
const fs = require('fs')
const input = fs.readFileSync('ex.txt', 'utf-8').toString().trim().split('\n')
//const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().split('\n')

let [n, ...arr] = input
arr = arr.map(v => Number(v))
//const result = arr.sort((a, b) => a - b)
//console.log(result.join('\n'))

let result2 = quickSort(arr)
console.log(result2.join('\n'))

function quickSort(arr) {
    // arr의 요소가 하나이면 arr 자체를 그대로 반환
    if (arr.length < 2) {
        return arr
    }

    // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소이다.
    let pivot = [arr[0]]
    let left = []
    let right = []

    // for문을 돌면서 pivot보다 작은 것은 왼쪽 큰 것은 오른쪽 그렇지 않은 것은 pivot에 넣어준다.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            pivot.push(arr[i])
        }
    }
    // quickSort 진행상황을 단계별로 보여주기 위한 코드
    console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`)

    // 재귀함수 구조로 다시 선언해서 끝날때까지 시작한다.
    return quickSort(left).concat(pivot, quickSort(right))
}
