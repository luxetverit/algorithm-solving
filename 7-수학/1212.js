const fs = require('fs')
let n = fs.readFileSync('ex.txt').toString().trim().split('')

//a = parseInt(n, 8).toString(2) --> 문자열이 너무 커서 런타임에러
let answer = ''
n.forEach((str, i) => {
    const dex = parseInt(str, 8)
    let binary = dex.toString(2)
    while (i !== 0 && binary.length < 3) {
        binary = '0' + binary
    }
    answer += binary
})

console.log(answer)
