// 문제
// 문자열 N개가 주어진다.
// 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.

// 각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 이루어져 있다.

// 입력
// 첫째 줄부터 N번째 줄까지 문자열이 주어진다.
// (1 ≤ N ≤ 100) 문자열의 길이는 100을 넘지 않는다.

// 출력
// 첫째 줄부터 N번째 줄까지 각각의 문자열에 대해서 소문자, 대문자, 숫자, 공백의 개수를 공백으로 구분해 출력한다.

const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split('\n')
const t = input.filter(str => str.length < 1)

if (t.length) {
    input.splice(input.indexOf(t[0]), 1)
}

input.forEach(str => {
    const lower = str.length - str.replace(/[a-z]/g, '').length
    const upper = str.length - str.replace(/[A-Z]/g, '').length
    const num = str.length - str.replace(/[0-9]/g, '').length
    const blank = str.length - str.replace(/\ /g, '').length

    console.log(lower, upper, num, blank)
})
